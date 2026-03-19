\# MPU Campus Food Navigator

A WeChat Mini Program for Macao Polytechnic University students to browse campus \& nearby food options, filter by scene/cost, and collect favorite stores.



\## Project Overview

This mini program is designed to solve the problem of MPU students struggling to find detailed food information on campus and around the school. It includes 15 food spots (canteens, restaurants, vending machines, etc.), with core information such as location, price range, recommended dishes, and business hours.



\## Team Members \& Responsibilities

| Name          | Student ID | GitHub Username | Role                  | Responsibilities                                  |

|---------------|------------|-----------------|-----------------------|---------------------------------------------------|

| ZHANG YIXIAO  | p2423046   | bosskyj86       | Team Leader \& Developer | Overall project management, mini program development |

| LI XILIN      | p2528480   | lllxxl-cmd      | Data Collector        | Collect and organize food information             |

| DENG YUFEI    | p2421420   | mpudengyufei    | Document Writer       | Write project documentation and graphical abstract |

| CHEN YIXIN    | p2422219   | p2422219        | Video Producer        | Record and edit demo video                        |



\## Core Features

1\. \*\*Food List Display\*\*: Show all 15 food spots with complete information (name, location, price, etc.)

2\. \*\*Scene Filter\*\*: Filter by "Breakfast/Lunch/Dinner" or "Coffee/Snack"

3\. \*\*Cost Filter\*\*: Filter by price range (≤30MOP / 30-60MOP)

4\. \*\*Collection Function\*\*: Collect favorite food spots and view them in one click

5\. \*\*Reset Filter\*\*: Clear all filters to view the full list



\## Data Structure

Each food spot includes 6 core fields (no scope/campus card):

| Field Name         | Description                  | Example                                          |

|--------------------|------------------------------|--------------------------------------------------|

| id                 | Unique ID for each spot      | 001, 002, ..., 015                               |

| name               | English name of the spot     | Koi Kei Bakery, Meng Tak Canteen                 |

| location           | English location description | 1/F, Meng Tak Building, Macao Main Campus        |

| average\_cost\_mop   | Price range (MOP)            | 35, 140, 8-15                                    |

| recommended\_dishes | Recommended food/drinks      | Almond Snowflake Crisp, Pork Chop Rice           |

| business\_hours     | Business hours (English)     | 10:00-22:00, all day, weekdays:08:00-21:00       |

| scene              | Food scene                   | Breakfast/Lunch/Dinner, Coffee/Snack             |



\## Project Structure

MPU-Campus-Food-Navigator-FoodNavTeam/

├── src/ # Core mini program code (ZHANG YIXIAO)

│ ├── data/ # Food data (JSON file, LI XILIN)

│ │ └── mpu\_food\_info.json

│ ├── pages/ # Mini program pages (only index page)

│ │ └── index/ # Home page (all functions here)

│ ├── app.js # Global logic

│ ├── app.json # Global configuration

│ └── app.wxss # Global styles

├── doc/ # Graphical abstract and documents (DENG YUFEI)

├── demo/ # Demo video (CHEN YIXIN)

├── .gitignore # Git ignore file

├── LICENSE # MIT License

└── README.md # Project documentation (English)







\## How to Run the Mini Program

\### 1. Prepare Tools

\- Install WeChat Developer Tools (stable version)

\- Use WeChat to scan the QR code to log in



\### 2. Import Project

1\. Open WeChat Developer Tools → Click "+" → Select "Mini Program"

2\. Project Name: MPU Campus Food Navigator

3\. Project Directory: Select the "src/" folder of this repository (local clone)

4\. AppID: Select "Test ID" (no need for official ID)

5\. Click "Create" to initialize the project



\### 3. Core Operations

\- \*\*Filter by Scene\*\*: Click "Meal" or "Coffee/Snack" button

\- \*\*Filter by Cost\*\*: Click "≤30MOP" or "30-60MOP" button

\- \*\*Collect Spot\*\*: Click "Collect" button on the food card

\- \*\*View Collection\*\*: Click "My Collection" button

\- \*\*Reset Filter\*\*: Click "Reset" button



\## Demo Video

The demo video will be uploaded to the /demo folder by CHEN YIXIN (p2422219) after completion.



\## License

This project is licensed under the MIT License.

