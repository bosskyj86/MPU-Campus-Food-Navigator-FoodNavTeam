Page({
  data: {
    allFoodList: [],    // 所有美食数据（LI XILIN - p2528480）
    filteredFoodList: [], // 筛选后的美食数据
    collectedIds: []    // 收藏的ID列表
  },

  // 页面加载时读取JSON数据
  onLoad() {
    const that = this;
    // 读取本地JSON文件
    wx.getFileSystemManager().readFile({
      filePath: '/data/mpu_food_info.json', // 数据路径（src/为根目录）
      encoding: 'utf-8',
      success(res) {
        // 解析JSON数据
        const foodData = JSON.parse(res.data);
        // 读取本地收藏数据
        const collectedIds = wx.getStorageSync('collectedFoodIds') || [];
        // 给每个数据添加收藏状态
        const foodList = foodData.map(item => {
          item.collected = collectedIds.includes(item.id);
          return item;
        });
        // 更新数据
        that.setData({
          allFoodList: foodList,
          filteredFoodList: foodList
        });
      },
      fail(err) {
        console.error("Read data failed:", err);
        wx.showToast({
          title: 'Load data failed!',
          icon: 'none',
          duration: 2000
        });
      }
    });
  },

  // 按场景筛选
  filterByScene(e) {
    const targetScene = e.currentTarget.dataset.scene;
    const filteredList = this.data.allFoodList.filter(item => {
      return item.scene === targetScene;
    });
    this.setData({ filteredFoodList: filteredList });
  },

  // 按价格筛选
  filterByCost(e) {
    const costType = e.currentTarget.dataset.cost;
    let filteredList = [];

    if (costType === 'low') {
      // ≤30MOP
      filteredList = this.data.allFoodList.filter(item => {
        const cost = Number(item.average_cost_mop);
        return cost <= 30;
      });
    } else if (costType === 'mid') {
      // 30-60MOP
      filteredList = this.data.allFoodList.filter(item => {
        const cost = Number(item.average_cost_mop);
        return cost > 30 && cost <= 60;
      });
    }

    this.setData({ filteredFoodList: filteredList });
  },

  // 重置筛选
  resetFilter() {
    this.setData({ filteredFoodList: this.data.allFoodList });
    wx.showToast({
      title: 'Filter reset!',
      icon: 'success',
      duration: 1000
    });
  },

  // 收藏/取消收藏
  toggleCollect(e) {
    const foodId = e.currentTarget.dataset.id;
    let collectedIds = this.data.collectedIds;

    // 判断是否已收藏
    if (collectedIds.includes(foodId)) {
      // 取消收藏
      collectedIds = collectedIds.filter(id => id !== foodId);
      wx.showToast({ title: 'Uncollected!', icon: 'none' });
    } else {
      // 收藏
      collectedIds.push(foodId);
      wx.showToast({ title: 'Collected!', icon: 'success' });
    }

    // 更新收藏状态
    const allFoodList = this.data.allFoodList.map(item => {
      if (item.id === foodId) {
        item.collected = !item.collected;
      }
      return item;
    });

    // 保存数据
    this.setData({
      allFoodList: allFoodList,
      filteredFoodList: allFoodList,
      collectedIds: collectedIds
    });

    // 持久化存储收藏数据
    wx.setStorageSync('collectedFoodIds', collectedIds);
  },

  // 显示我的收藏
  showCollection() {
    const collectedList = this.data.allFoodList.filter(item => item.collected);

    if (collectedList.length === 0) {
      wx.showModal({
        title: 'My Collection',
        content: 'No collected food spots yet!',
        showCancel: false
      });
      return;
    }

    // 拼接收藏内容
    let content = 'Your Collected Food:\n';
    collectedList.forEach((item, index) => {
      content += `${index + 1}. ${item.name} (${item.average_cost_mop} MOP)\n`;
    });

    wx.showModal({
      title: 'My Collection',
      content: content,
      showCancel: false,
      confirmText: 'OK'
    });
  }
});