// Menu data for Cafe Street1
const menuData = {
  "cafe_name": "Cafe Street1",
  "categories": {
    "Burgers": {
      "veg": [
        {"name": "CS1 Special Burger", "price": 150, "special": true},
        {"name": "Aloo Tikki Burger", "price": 50},
        {"name": "Veg Burger", "price": 70},
        {"name": "Tandoori Veg Burger", "price": 80},
        {"name": "Crispy Paneer Burger", "price": 100}
      ],
      "non_veg": [
        {"name": "CS1 Special Burger", "price": 170, "special": true},
        {"name": "Crispy Chicken Burger", "price": 120},
        {"name": "Tandoori Burger", "price": 110},
        {"name": "Chicken Chilli Lava Burger", "price": 110},
        {"name": "Chicken Surprise Burger", "price": 110}
      ],
      "add_ons": [
        {"name": "Cheese Slice", "price": 20, "addon": true},
        {"name": "Extra Patty", "price": 50, "addon": true}
      ]
    },
    "Pizza": {
      "veg": [
        {"name": "Margarita", "price": 150},
        {"name": "Veggie Delight", "price": 180},
        {"name": "Peri Peri Paneer", "price": 190},
        {"name": "Farmhouse", "price": 200},
        {"name": "Tandoori Paneer", "price": 190}
      ],
      "non_veg": [
        {"name": "Tandoori Chicken Pizza", "price": 210},
        {"name": "Peri Peri Chicken Pizza", "price": 210},
        {"name": "Smoked Chicken Pizza", "price": 210},
        {"name": "Chilli Garlic Chicken Pizza", "price": 210}
      ],
      "add_ons": [
        {"name": "Cheese Burst", "price": 50, "addon": true}
      ]
    },
    "Pasta & Spaghetti": {
      "veg": [
        {"name": "White Sauce Pasta", "price": 190},
        {"name": "Red Sauce Pasta", "price": 180},
        {"name": "Mix Sauce Pasta", "price": 180},
        {"name": "Spaghetti Aglio Olio", "price": 180},
        {"name": "Spaghetti Alfredo", "price": 190},
        {"name": "Pesto Pasta", "price": 200},
        {"name": "Mac & Cheese", "price": 200}
      ],
      "non_veg": [
        {"name": "White Sauce Pasta", "price": 230},
        {"name": "Red Sauce Pasta", "price": 230},
        {"name": "Mix Sauce Pasta", "price": 230},
        {"name": "Spaghetti Aglio Olio", "price": 230},
        {"name": "Spaghetti Alfredo", "price": 230},
        {"name": "Pesto Pasta", "price": 230}
      ],
      "add_ons": [
        {"name": "Extra Veggies", "price": 40, "addon": true}
      ]
    },
    "Sandwiches & Wraps": {
      "veg_sandwiches": [
        {"name": "CS1 Sandwich", "price": 180, "special": true},
        {"name": "Peri Peri Paneer", "price": 140},
        {"name": "Tandoori Veg Sandwich", "price": 130},
        {"name": "Tandoori Paneer", "price": 140},
        {"name": "Spinach & Corn", "price": 160},
        {"name": "Veg Club", "price": 160},
        {"name": "Paneer Club Sandwich", "price": 200},
        {"name": "Wow Paneer Sandwich", "price": 140}
      ],
      "non_veg_sandwiches": [
        {"name": "Egg Sandwich", "price": 120},
        {"name": "Peri Peri Chicken Sandwich", "price": 150},
        {"name": "Chicken DC Sandwich", "price": 160},
        {"name": "Tandoori Chicken Sandwich", "price": 160},
        {"name": "Smokey Chicken Sandwich", "price": 160},
        {"name": "Chicken Club Sandwich", "price": 210},
        {"name": "Chicken Cheese Sandwich", "price": 160}
      ],
      "veg_wraps": [
        {"name": "CS1 Special", "price": 150, "special": true},
        {"name": "Aloo Tikki Wrap", "price": 90},
        {"name": "Hara Bhara Kabab Wrap", "price": 130},
        {"name": "Hummus Falafel", "price": 150},
        {"name": "Paneer Wrap", "price": 130},
        {"name": "Paneer Crispy Wrap", "price": 150}
      ],
      "non_veg_wraps": [
        {"name": "CS1 Special", "price": 160, "special": true},
        {"name": "Chicken Cheese Wrap", "price": 140},
        {"name": "Chicken Kabab Wrap", "price": 150},
        {"name": "Grilled Chicken Wrap", "price": 150}
      ]
    },
    "Chinese & Asian": {
      "veg_noodles_rice": [
        {"name": "Veg Noodles", "price": 140},
        {"name": "Garlic Chilli Noodles", "price": 160},
        {"name": "Schezwan Noodles", "price": 180},
        {"name": "Hakka Noodles", "price": 190},
        {"name": "Singapuri Noodles", "price": 190},
        {"name": "Fried Rice", "price": 150},
        {"name": "Paneer Fried Rice", "price": 190}
      ],
      "non_veg_noodles_rice": [
        {"name": "Egg Chilli Garlic Noodles", "price": 190},
        {"name": "Egg Schezwan Noodles", "price": 200},
        {"name": "Egg Hakka Noodles", "price": 200},
        {"name": "Egg Singapuri Noodles", "price": 200},
        {"name": "Chicken Chilli Garlic Noodles", "price": 220},
        {"name": "Chicken Hakka Noodles", "price": 220},
        {"name": "Chicken Schezwan Noodles", "price": 220},
        {"name": "Chicken Singapuri Noodles", "price": 220},
        {"name": "Egg Fried Rice", "price": 180}
      ],
      "combos": [
        {"name": "Chilli Paneer with Noodles/Rice", "price": 200, "combo": true},
        {"name": "Manchurian with Noodles/Rice", "price": 200, "combo": true},
        {"name": "Chilli Chicken with Noodles/Rice", "price": 200, "combo": true},
        {"name": "Chicken Manchurian with Noodles/Rice", "price": 200, "combo": true}
      ]
    },
    "Snacks & Appetizers": {
      "veg": [
        {"name": "Spring Roll", "price": 140},
        {"name": "Kurkure Spring Roll", "price": 180},
        {"name": "Crispy Corn", "price": 190},
        {"name": "Paneer Salt & Pepper", "price": 200},
        {"name": "Chilli Potato", "price": 150},
        {"name": "Honey Chilli Potato", "price": 170},
        {"name": "Chilly Paneer", "price": 200},
        {"name": "Manchurian (6 pieces)", "price": 170}
      ],
      "non_veg": [
        {"name": "Chicken Salt & Pepper", "price": 200},
        {"name": "Chilli Chicken", "price": 200},
        {"name": "Schezwan Chicken Chilli", "price": 220}
      ]
    },
    "Momos": {
      "veg": [
        {"name": "Steam Momos", "price": 120},
        {"name": "Veg Kurkure Momos", "price": 170},
        {"name": "Paneer Momos", "price": 140},
        {"name": "Paneer Kurkure Momos", "price": 180},
        {"name": "Chilli Momos", "price": 150},
        {"name": "Paneer Chilli Momos", "price": 180}
      ],
      "non_veg": [
        {"name": "Steam Momos", "price": 120},
        {"name": "Kurkure Momos", "price": 150}
      ]
    },
    "Breads & Sides": {
      "garlic_breads_veg": [
        {"name": "Classic Garlic Bread", "price": 120},
        {"name": "Mexican Garlic Bread", "price": 150},
        {"name": "Paneer Garlic Bread", "price": 160},
        {"name": "Paneer Stuffed Garlic Bread", "price": 200}
      ],
      "garlic_breads_non_veg": [
        {"name": "Chicken Garlic Bread", "price": 150},
        {"name": "Chicken Stuffed Garlic Bread", "price": 200}
      ],
      "french_fries": [
        {"name": "Classic Salted", "price": 100},
        {"name": "Peri Peri Fries", "price": 140},
        {"name": "Cheesy Peri Peri Fries", "price": 190},
        {"name": "Cheese Baked Fries", "price": 210},
        {"name": "Cheese Baked Peri Peri Fries", "price": 220}
      ]
    },
    "Beverages": {
      "hot_beverages": [
        {"name": "Hot Coffee", "price": 50},
        {"name": "Black Coffee", "price": 50},
        {"name": "Cappuccino", "price": 80},
        {"name": "Latte", "price": 80},
        {"name": "Hazelnut Coffee", "price": 80},
        {"name": "Caramel Coffee", "price": 80},
        {"name": "Hot Chocolate", "price": 80}
      ],
      "cold_beverages": [
        {"name": "Cold Coffee", "price": 100},
        {"name": "Hazelnut Cold Coffee", "price": 130},
        {"name": "Caramel Cold Coffee", "price": 130},
        {"name": "Lemon Ice Tea", "price": 100},
        {"name": "Peach Ice Tea", "price": 100},
        {"name": "Strawberry Ice Tea", "price": 100},
        {"name": "Orange Ice Tea", "price": 100}
      ],
      "mojitos": [
        {"name": "Virgin Mojito", "price": 100},
        {"name": "Mixberry Mojito", "price": 100},
        {"name": "Strawberry Mojito", "price": 100},
        {"name": "Green Apple Mojito", "price": 100},
        {"name": "Orange Mojito", "price": 100},
        {"name": "Blueberry Mojito", "price": 100},
        {"name": "Watermelon Mojito", "price": 100},
        {"name": "Mango Mojito", "price": 100},
        {"name": "Blue Lagoon Mojito", "price": 100}
      ],
      "shakes": [
        {"name": "Vanilla Shake", "price": 120},
        {"name": "Strawberry Shake", "price": 120},
        {"name": "Mango Shake", "price": 120},
        {"name": "Oreo Shake", "price": 120},
        {"name": "Butterscotch Shake", "price": 120},
        {"name": "Chocolate Shake", "price": 120},
        {"name": "Kit Kat Shake", "price": 120},
        {"name": "Mixed Berry Shake", "price": 120},
        {"name": "Blueberry Shake", "price": 120},
        {"name": "Black Currant Shake", "price": 120},
        {"name": "Banana Shake", "price": 120},
        {"name": "Brownie Shake", "price": 130},
        {"name": "Oreo Nutella Shake", "price": 150},
        {"name": "Red Velvet Cheesecake Shake", "price": 150},
        {"name": "Blueberry Cheesecake Shake", "price": 150},
        {"name": "Mango Cheesecake Shake", "price": 150}
      ],
      "others": [
        {"name": "Sweet Lemonade", "price": 80},
        {"name": "Salty Lemonade", "price": 80},
        {"name": "Masala Lemonade", "price": 80}
      ]
    }
  }
};

// Application state
let currentFilter = 'all';
let currentCategory = 'all';
let searchQuery = '';
let allMenuItems = [];

// DOM elements
let menuGrid, searchInput, filterButtons, navTabs, loading, noResults;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded - Initializing app...');
    initializeApp();
    
    // Add a subtle entrance animation
    setTimeout(() => {
        const app = document.querySelector('.app');
        if (app) {
            app.style.opacity = '1';
            app.style.transform = 'scale(1)';
        }
    }, 100);
});

function initializeApp() {
    console.log('Initializing app...');
    
    // Initialize DOM elements
    menuGrid = document.getElementById('menuGrid');
    searchInput = document.getElementById('searchInput');
    filterButtons = document.querySelectorAll('.filter-btn');
    navTabs = document.querySelectorAll('.nav-tab');
    loading = document.getElementById('loading');
    noResults = document.getElementById('noResults');

    console.log('DOM Elements found:', {
        menuGrid: !!menuGrid,
        searchInput: !!searchInput,
        filterButtons: filterButtons.length,
        navTabs: navTabs.length
    });

    // Add initial styling
    const app = document.querySelector('.app');
    if (app) {
        app.style.opacity = '0';
        app.style.transform = 'scale(0.95)';
        app.style.transition = 'all 0.5s ease';
    }

    processMenuData();
    setupEventListeners();
    displayMenuItems();
}

function processMenuData() {
    console.log('Processing menu data...');
    allMenuItems = [];
    
    Object.keys(menuData.categories).forEach(categoryKey => {
        const category = menuData.categories[categoryKey];
        
        Object.keys(category).forEach(subCategoryKey => {
            const items = category[subCategoryKey];
            
            items.forEach(item => {
                const processedItem = {
                    ...item,
                    category: categoryKey,
                    subCategory: subCategoryKey,
                    type: determineItemType(subCategoryKey),
                    categorySlug: getCategorySlug(categoryKey)
                };
                
                allMenuItems.push(processedItem);
            });
        });
    });
    
    console.log(`Processed ${allMenuItems.length} menu items`);
}

function determineItemType(subCategoryKey) {
    const vegCategories = ['veg', 'veg_sandwiches', 'veg_wraps', 'veg_noodles_rice', 'garlic_breads_veg', 'french_fries', 'hot_beverages', 'cold_beverages', 'mojitos', 'shakes', 'others'];
    const nonVegCategories = ['non_veg', 'non_veg_sandwiches', 'non_veg_wraps', 'non_veg_noodles_rice', 'garlic_breads_non_veg'];
    
    if (vegCategories.includes(subCategoryKey)) return 'veg';
    if (nonVegCategories.includes(subCategoryKey)) return 'non-veg';
    if (subCategoryKey === 'add_ons') return 'addon';
    if (subCategoryKey === 'combos') return 'combo';
    
    return 'veg'; // default
}

function getCategorySlug(categoryName) {
    const slugMap = {
        'Burgers': 'burgers',
        'Pizza': 'pizza',
        'Pasta & Spaghetti': 'pasta',
        'Sandwiches & Wraps': 'sandwiches',
        'Chinese & Asian': 'chinese',
        'Snacks & Appetizers': 'snacks',
        'Momos': 'momos',
        'Breads & Sides': 'breads',
        'Beverages': 'beverages'
    };
    
    return slugMap[categoryName] || categoryName.toLowerCase();
}

function setupEventListeners() {
    console.log('Setting up event listeners...');
    
    // Search functionality with immediate response
    if (searchInput) {
        const handleSearch = () => {
            const newQuery = searchInput.value.toLowerCase().trim();
            console.log('Search query:', newQuery);
            
            if (newQuery !== searchQuery) {
                searchQuery = newQuery;
                // Reset category to 'all' when searching to search across all categories
                if (searchQuery.length > 0) {
                    currentCategory = 'all';
                    updateActiveCategory();
                }
                displayMenuItems();
            }
        };

        searchInput.addEventListener('input', handleSearch);
        searchInput.addEventListener('keyup', handleSearch);
        searchInput.addEventListener('change', handleSearch);
        
        // Handle Enter key
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                handleSearch();
            }
        });
        
        console.log('Search listeners attached');
    }
    
    // Filter buttons
    if (filterButtons && filterButtons.length > 0) {
        filterButtons.forEach((button, index) => {
            const filterType = button.getAttribute('data-filter');
            console.log(`Setting up filter button ${index}: ${filterType}`);
            
            button.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                const clickedFilter = this.getAttribute('data-filter');
                console.log('Filter clicked:', clickedFilter);
                
                if (currentFilter !== clickedFilter) {
                    currentFilter = clickedFilter;
                    updateActiveFilter();
                    displayMenuItems();
                }
            });
        });
        console.log(`Filter listeners attached to ${filterButtons.length} buttons`);
    }
    
    // Category navigation
    if (navTabs && navTabs.length > 0) {
        navTabs.forEach((tab, index) => {
            const categoryType = tab.getAttribute('data-category');
            console.log(`Setting up nav tab ${index}: ${categoryType}`);
            
            tab.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                const clickedCategory = this.getAttribute('data-category');
                console.log('Category clicked:', clickedCategory);
                
                if (currentCategory !== clickedCategory) {
                    currentCategory = clickedCategory;
                    // Clear search when selecting a category
                    if (searchInput) {
                        searchInput.value = '';
                        searchQuery = '';
                    }
                    updateActiveCategory();
                    displayMenuItems();
                }
            });
        });
        console.log(`Category listeners attached to ${navTabs.length} tabs`);
    }
}

function updateActiveFilter() {
    console.log('Updating active filter to:', currentFilter);
    if (filterButtons) {
        filterButtons.forEach(button => {
            const buttonFilter = button.getAttribute('data-filter');
            if (buttonFilter === currentFilter) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }
}

function updateActiveCategory() {
    console.log('Updating active category to:', currentCategory);
    if (navTabs) {
        navTabs.forEach(tab => {
            const tabCategory = tab.getAttribute('data-category');
            if (tabCategory === currentCategory) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });
    }
}

function displayMenuItems() {
    console.log('Displaying menu items - Filter:', currentFilter, 'Category:', currentCategory, 'Search:', searchQuery);
    
    const filteredItems = getFilteredItems();
    console.log('Filtered items count:', filteredItems.length);
    
    if (filteredItems.length === 0) {
        showNoResults();
        return;
    }
    
    hideNoResults();
    
    if (currentCategory === 'all' || searchQuery.length > 0) {
        renderAllCategories(filteredItems);
    } else {
        renderSingleCategory(filteredItems);
    }
}

function getFilteredItems() {
    let filtered = [...allMenuItems];
    console.log('Starting with', filtered.length, 'items');
    
    // Filter by search query first (most important)
    if (searchQuery && searchQuery.length > 0) {
        filtered = filtered.filter(item => {
            const itemName = item.name.toLowerCase();
            const itemCategory = item.category.toLowerCase();
            const itemSubCategory = item.subCategory.toLowerCase();
            
            const matches = itemName.includes(searchQuery) || 
                           itemCategory.includes(searchQuery) ||
                           itemSubCategory.includes(searchQuery);
                           
            return matches;
        });
        console.log('After search filter:', filtered.length, 'items');
    }
    
    // Filter by category (only if no search query)
    if (currentCategory !== 'all' && searchQuery.length === 0) {
        filtered = filtered.filter(item => {
            return item.categorySlug === currentCategory;
        });
        console.log('After category filter:', filtered.length, 'items');
    }
    
    // Filter by type (veg/non-veg)
    if (currentFilter !== 'all') {
        filtered = filtered.filter(item => {
            if (currentFilter === 'veg') {
                return item.type === 'veg' || item.addon || item.combo;
            } else if (currentFilter === 'non-veg') {
                return item.type === 'non-veg';
            }
            return true;
        });
        console.log('After type filter:', filtered.length, 'items');
    }
    
    // Sort by category first, then by price
    filtered.sort((a, b) => {
        if (a.category !== b.category) {
            return a.category.localeCompare(b.category);
        }
        return a.price - b.price;
    });
    
    return filtered;
}

function renderAllCategories(items) {
    console.log('Rendering all categories with', items.length, 'items');
    const groupedItems = groupItemsByCategory(items);
    menuGrid.innerHTML = '';
    
    // If we're searching, don't show category headers for single items
    const showCategoryHeaders = searchQuery.length === 0 || Object.keys(groupedItems).length > 1;
    
    Object.keys(groupedItems).forEach(categoryKey => {
        if (showCategoryHeaders) {
            const categorySection = createCategorySection(categoryKey);
            menuGrid.appendChild(categorySection);
        }
        
        const categoryItems = groupedItems[categoryKey];
        const subGroups = groupItemsBySubCategory(categoryItems);
        
        Object.keys(subGroups).forEach(subCategoryKey => {
            if (Object.keys(subGroups).length > 1 && showCategoryHeaders) {
                const subCategoryTitle = createSubCategoryTitle(subCategoryKey);
                menuGrid.appendChild(subCategoryTitle);
            }
            
            subGroups[subCategoryKey].forEach((item, index) => {
                const itemElement = createMenuItem(item);
                // Add staggered animation
                itemElement.style.animationDelay = `${index * 0.05}s`;
                itemElement.classList.add('fade-in');
                menuGrid.appendChild(itemElement);
            });
        });
    });
}

function renderSingleCategory(items) {
    console.log('Rendering single category with', items.length, 'items');
    menuGrid.innerHTML = '';
    
    if (items.length === 0) {
        showNoResults();
        return;
    }
    
    const subGroups = groupItemsBySubCategory(items);
    
    Object.keys(subGroups).forEach(subCategoryKey => {
        if (Object.keys(subGroups).length > 1) {
            const subCategoryTitle = createSubCategoryTitle(subCategoryKey);
            menuGrid.appendChild(subCategoryTitle);
        }
        
        subGroups[subCategoryKey].forEach((item, index) => {
            const itemElement = createMenuItem(item);
            // Add staggered animation
            itemElement.style.animationDelay = `${index * 0.05}s`;
            itemElement.classList.add('fade-in');
            menuGrid.appendChild(itemElement);
        });
    });
}

function groupItemsByCategory(items) {
    return items.reduce((groups, item) => {
        const category = item.category;
        if (!groups[category]) {
            groups[category] = [];
        }
        groups[category].push(item);
        return groups;
    }, {});
}

function groupItemsBySubCategory(items) {
    return items.reduce((groups, item) => {
        const subCategory = item.subCategory;
        if (!groups[subCategory]) {
            groups[subCategory] = [];
        }
        groups[subCategory].push(item);
        return groups;
    }, {});
}

function createCategorySection(categoryName) {
    const section = document.createElement('div');
    section.className = 'category-section';
    section.innerHTML = `
        <h2 class="category-title">${categoryName}</h2>
    `;
    return section;
}

function createSubCategoryTitle(subCategoryKey) {
    const title = document.createElement('div');
    title.className = 'category-subtitle';
    title.textContent = formatSubCategoryName(subCategoryKey);
    return title;
}

function formatSubCategoryName(subCategoryKey) {
    const nameMap = {
        'veg': 'Vegetarian Delights',
        'non_veg': 'Non-Vegetarian Specialties',
        'add_ons': 'Delicious Add-Ons',
        'veg_sandwiches': 'Vegetarian Sandwiches',
        'non_veg_sandwiches': 'Non-Vegetarian Sandwiches',
        'veg_wraps': 'Vegetarian Wraps',
        'non_veg_wraps': 'Non-Vegetarian Wraps',
        'veg_noodles_rice': 'Vegetarian Noodles & Rice',
        'non_veg_noodles_rice': 'Non-Vegetarian Noodles & Rice',
        'combos': 'Combo Specials',
        'garlic_breads_veg': 'Vegetarian Garlic Breads',
        'garlic_breads_non_veg': 'Non-Vegetarian Garlic Breads',
        'french_fries': 'Crispy French Fries',
        'hot_beverages': 'Hot Beverages',
        'cold_beverages': 'Refreshing Cold Beverages',
        'mojitos': 'Fresh Mojitos',
        'shakes': 'Creamy Shakes',
        'others': 'Other Refreshing Drinks'
    };
    
    return nameMap[subCategoryKey] || subCategoryKey.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
}

function createMenuItem(item) {
    const menuItem = document.createElement('div');
    menuItem.className = `menu-item ${item.special ? 'special' : ''} ${item.addon ? 'add-on' : ''}`;
    
    const typeIndicator = item.type === 'veg' || item.addon || item.combo ? 
        '<span class="veg-indicator"></span>' : 
        '<span class="non-veg-indicator"></span>';
    
    const itemType = item.type === 'veg' || item.addon || item.combo ? 'Vegetarian' : 'Non-Vegetarian';
    
    const specialLabels = [];
    if (item.addon) specialLabels.push('<span class="add-on-label">Add-On</span>');
    if (item.combo) specialLabels.push('<span class="combo-label">Combo Deal</span>');
    
    menuItem.innerHTML = `
        ${specialLabels.join('')}
        <div class="menu-item-header">
            <div class="menu-item-info">
                <h3 class="menu-item-name">${item.name}</h3>
                <div class="menu-item-type">
                    ${typeIndicator}
                    ${itemType}
                </div>
            </div>
            <div class="menu-item-price">₹${item.price}</div>
        </div>
    `;
    
    return menuItem;
}

function showNoResults() {
    console.log('Showing no results');
    if (menuGrid) {
        menuGrid.innerHTML = '';
    }
    if (noResults) {
        noResults.classList.remove('hidden');
    }
}

function hideNoResults() {
    if (noResults) {
        noResults.classList.add('hidden');
    }
}

// Add CSS animation class
const style = document.createElement('style');
style.textContent = `
    .fade-in {
        opacity: 0;
        transform: translateY(20px);
        animation: fadeInUp 0.6s ease forwards;
    }
    
    @keyframes fadeInUp {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .menu-grid {
        transition: all 0.3s ease;
    }
`;
document.head.appendChild(style);
