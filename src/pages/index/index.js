Page({
  data: {
    allFoodList: [],    // 所有美食数据（LI XILIN - p2528480）
    filteredFoodList: [], // 筛选后的美食数据
    collectedIds: []    // 收藏的ID列表
  },

  // 页面加载时初始化数据
  onLoad() {
    const that = this;
    // 完整的美食数据（直接写在代码里，绕开文件读取权限问题）
    const foodData = [
      {
        "id": "001",
        "name": "Koi Kei Bakery",
        "location": "South 50 meters, Gao Mei Shi Street, Sé District",
        "average_cost_mop": "140",
        "recommended_dishes": "Almond Snowflake Crisp",
        "business_hours": "10:00-22:00",
        "scene": "Coffee/Snack"
      },
      {
        "id": "002",
        "name": "Heung Kitchen",
        "location": "Units I,J,K,L,M, Ground Floor & 1st Floor, Diamond Residence, Nos.388-A to 364-C, Avenida de Horta e Costa, Sé District",
        "average_cost_mop": "95",
        "recommended_dishes": "roast chicken",
        "business_hours": "08:00-22:00",
        "scene": "Breakfast/Lunch/Dinner"
      },
      {
        "id": "003",
        "name": "Wu Yi Guang Chao Fu Noodle Restaurant (Lixin Building Branch)",
        "location": "Shop H, Ground Floor, Lixin Building, No.65, Rua de Nagasaki, Porto Novo, Sé District",
        "average_cost_mop": "39",
        "recommended_dishes": "Oyster and Pork Chop Noodle Soup",
        "business_hours": "weekdays:08:00-19:30; weekend:09:30-19:30",
        "scene": "Breakfast/Lunch/Dinner"
      },
      {
        "id": "004",
        "name": "Vietnam Pho(NAPE Branch)",
        "location": "Shop F, Ground Floor, No.731, Avenida da Amizade, Sé District",
        "average_cost_mop": "63",
        "recommended_dishes": "Hue Beef Noodle",
        "business_hours": "10:00-24:00",
        "scene": "Breakfast/Lunch/Dinner"
      },
      {
        "id": "005",
        "name": "Zone de Aterros do Porto Exterior PouGwokCaan",
        "location": "Floor L, Chong Yu Building, 606H‑606G Praça de Infante D. Henrique, Porto Novo, Sé District",
        "average_cost_mop": "182",
        "recommended_dishes": "Portuguese-style Baked Oxtail",
        "business_hours": "11:30-23:00",
        "scene": "Breakfast/Lunch/Dinner"
      },
      {
        "id": "006",
        "name": "King of Dumplings Loyal Success(Rio Branch)",
        "location": "Shop G & H, Ground Floor, Nam Un Garden, No.40-A, Avenida de Horta e Costa, Sé District",
        "average_cost_mop": "95",
        "recommended_dishes": "Dumpling, Sichuan Spicy Blood Curd & Offal Casserole",
        "business_hours": "11:00-23:00",
        "scene": "Breakfast/Lunch/Dinner"
      },
      {
        "id": "007",
        "name": "Cafe de Coral(Rio Hotal)",
        "location": "Ground Floor, Rio Hotel, Nos.25 to 67H, Avenida de Horta e Costa, Porto Novo, Sé District",
        "average_cost_mop": "36",
        "recommended_dishes": "Pork Chop Rice",
        "business_hours": "7:00-20:00",
        "scene": "Breakfast/Lunch/Dinner"
      },
      {
        "id": "008",
        "name": "vending machine",
        "location": "Floor G, Forward Building A",
        "average_cost_mop": "12",
        "recommended_dishes": "Beverages, Snacks",
        "business_hours": "all day",
        "scene": "Coffee/Snack"
      },
      {
        "id": "009",
        "name": "vending machine",
        "location": "1/F, Forward Building A",
        "average_cost_mop": "8",
        "recommended_dishes": "Beverages, Snacks",
        "business_hours": "all day",
        "scene": "Coffee/Snack"
      },
      {
        "id": "010",
        "name": "vending machine",
        "location": "Floor G, Forward Building B",
        "average_cost_mop": "15",
        "recommended_dishes": "Beverages, Snacks",
        "business_hours": "all day",
        "scene": "Coffee/Snack"
      },
      {
        "id": "011",
        "name": "vending machine",
        "location": "Floor G, PM Multisport Pavilion",
        "average_cost_mop": "16",
        "recommended_dishes": "Beverages, Snacks",
        "business_hours": "all day",
        "scene": "Coffee/Snack"
      },
      {
        "id": "012",
        "name": "Starlight Bookstore",
        "location": "Floor G, Mingde Building",
        "average_cost_mop": "50",
        "recommended_dishes": "cake, coffee, snacks",
        "business_hours": "weekdays:10:00-21:00; weekend:11:00-20:00",
        "scene": "Coffee/Snack"
      },
      {
        "id": "013",
        "name": "Meng Tak Canteen",
        "location": "1/F, Meng Tak Building, Macao Main Campus",
        "average_cost_mop": "35",
        "recommended_dishes": "Rice with Toppings, Clay Pot Rice",
        "business_hours": "08:00 – 21:00",
        "scene": "Breakfast/Lunch/Dinner"
      },
      {
        "id": "014",
        "name": "Wui Chi Canteen",
        "location": "1/F, Wui Chi Building, Macao Main Campus",
        "average_cost_mop": "38",
        "recommended_dishes": "Noodle Dishes",
        "business_hours": "08:00 – 20:00",
        "scene": "Breakfast/Lunch/Dinner"
      },
      {
        "id": "015",
        "name": "Pearl Jubilee Canteen",
        "location": "LG5 Entrance lobby, Pearl Jubilee Building, Taipa Campus",
        "average_cost_mop": "42",
        "recommended_dishes": "Snacks and Light Meals",
        "business_hours": "08:00 – 20:00",
        "scene": "Breakfast/Lunch/Dinner"
      }
    ];

    // 读取本地收藏数据
    const collectedIds = wx.getStorageSync('collectedFoodIds') || [];
    // 给每个数据添加收藏状态
    const foodList = foodData.map(item => {
      item.collected = collectedIds.includes(item.id);
      return item;
    });
    // 更新数据到页面
    that.setData({
      allFoodList: foodList,
      filteredFoodList: foodList
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
