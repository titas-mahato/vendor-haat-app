import React, { useState, useEffect, useRef } from 'react';

// --- Translations Data ---
const translations = {
  hi: { // Hindi
    appName: 'VendorHaat',
    home: 'होम',
    findMaterials: 'सामग्री ढूंढें',
    myOrders: 'मेरे आर्डर',
    favoriteSuppliers: 'पसंदीदा सप्लायर',
    help: 'मदद',
    todaysHighlights: 'आज के खास डील्स',
    oneStopSolution: 'स्ट्रीट फूड वेंडरों के लिए आपका वन-स्टॉप समाधान!',
    highQualityLowPrice: 'विक्रेताओं के लिए उच्च-गुणवत्ता, कम कीमत का कच्चा माल',
    findRawMaterials: 'सामग्री ढूंढें',
    myOrdersButton: 'मेरे आर्डर',
    searchPlaceholder: 'जैसे: आलू, प्याज, मसाला',
    orSearchByVoice: 'या बोलकर खोजें',
    exploreCategories: 'श्रेणियां एक्सप्लोर करें',
    vegetables: 'सब्ज़ियां',
    spices: 'मसाले',
    pulses: 'दालें',
    dairy: 'डेयरी',
    milkAndCoconut: 'दूध और नारियल पानी',
    freshVegetables: 'ताज़ी सब्ज़ियाँ',
    freshFruits: 'ताज़े फल',
    milkProducts: 'दूध उत्पाद',
    gheeAndOils: 'घी और तेल',
    countrySpecials: 'कंट्री स्पेशल',
    eggs: 'अंडे',
    dryFruitsAndSeeds: 'सूखे मेवे और बीज',
    breads: 'ब्रेड',
    cerealsAndMillets: 'अनाज और बाजरा',
    saltAndSugar: 'नमक और चीनी',
    naturalSpices: 'प्राकृतिक मसाले',
    attaAndRice: 'आटा और चावल',
    snacks: 'स्नैक्स',
    addOns: 'ऐड-ऑन',
    breakfastCereal: 'नाश्ता अनाज',
    offerZone: 'ऑफर जोन',
    suppliers: 'सप्लायर',
    viewAllSuppliers: 'सभी सप्लायर देखें',
    loadingSuppliers: 'सप्लायर लोड हो रहे हैं...',
    back: 'वापस',
    fssaiCertified: 'FSSAI प्रमाणित',
    contact: 'संपर्क',
    products: 'उत्पाद',
    view: 'देखें',
    addToCart: 'कार्ट में जोड़ें',
    viewCart: 'कार्ट देखें',
    cart: 'कार्ट',
    myOrder: 'मेरा आर्डर',
    cartEmpty: 'आपका कार्ट खाली है।',
    total: 'कुल योग',
    placeOrder: 'आर्डर प्लेस करें',
    orderSuccess: 'आपका आर्डर सफलतापूर्वक भेज दिया गया है! सप्लायर की पुष्टि का इंतजार करें।',
    selectItemsForOrder: 'कृपया आर्डर करने के लिए कुछ आइटम चुनें।',
    addedToCart: 'कार्ट में जोड़ दिए गए।',
    removedFromCart: 'कार्ट से हटा दिए गए।',
    okay: 'ठीक है',
    todayCheaper: 'आज सस्ता!',
    todayExpensive: 'आज महंगा!',
    normal: 'सामान्य',
    priceIncreased: 'कीमत बढ़ी!',
    discount: 'की छूट!',
    allRightsReserved: 'सभी अधिकार सुरक्षित।',
    loginTitle: 'वेंडरहाट में आपका स्वागत है!',
    loginSubtitle: 'अपने व्यापार को आगे बढ़ाएं।',
    mobileNumber: 'मोबाइल नंबर',
    enterMobileNumber: 'मोबाइल नंबर दर्ज करें',
    getOTP: 'ओटीपी प्राप्त करें',
    loginButton: 'लॉगिन करें',
    signupButton: 'साइन अप करें',
    loginSuccess: 'लॉगिन सफल!',
    invalidCredentials: 'अमान्य क्रेडेंशियल। कृपया पुनः प्रयास करें।',
    backToFindMaterials: 'सामग्री ढूंढें पर वापस',
    backToSuppliers: 'सप्लायर पर वापस',
    yourLocation: 'आपकी लोकेशन',
    enterLocation: 'लोकेशन दर्ज करें (जैसे: दिल्ली)',
    applyFilter: 'फ़िल्टर लागू करें',
    noSuppliersFound: 'इस लोकेशन पर कोई सप्लायर नहीं मिला।',
    firstName: 'पहला नाम',
    lastName: 'अंतिम नाम',
    address: 'पता',
    enterFirstName: 'पहला नाम दर्ज करें',
    enterLastName: 'अंतिम नाम दर्ज करें',
    enterAddress: 'पता दर्ज करें',
    verifyOTP: 'OTP सत्यापित करें',
    enterOTP: 'OTP दर्ज करें',
    invalidOTP: 'अमान्य OTP। कृपया पुनः प्रयास करें।',
    signupSuccess: 'साइन अप सफल! आपका स्वागत है।',
    alreadyHaveAccount: 'पहले से ही एक खाता है? यहां लॉगिन करें',
    dontHaveAccount: 'खाता नहीं है? यहां साइन अप करें',
    or: 'या',
    profile: 'प्रोफ़ाइल',
    orderHistory: 'आर्डर इतिहास',
    helpSupport: 'सहायता और समर्थन',
    logout: 'लॉग आउट',
    editProfile: 'प्रोफ़ाइल संपादित करें',
    saveChanges: 'बदलाव सहेजें',
    changeProfilePicture: 'प्रोफ़ाइल तस्वीर बदलें',
    profileUpdated: 'प्रोफ़ाइल सफलतापूर्वक अपडेट की गई!',
    noOrders: 'अभी तक कोई ऑर्डर नहीं है।',
    faq: 'अक्सर पूछे जाने वाले प्रश्न (FAQ)',
    downloadApp: 'ऐप डाउनलोड करें',
    specialOffers: 'विशेष ऑफ़र',
    bestSellingProducts: 'सबसे ज्यादा बिकने वाले उत्पाद',
    recentOrders: 'हाल के आदेश',
    viewAllOrders: 'सभी आदेश देखें',
    analytics: 'एनालिटिक्स',
  },
  en: { // English
    appName: 'VendorHaat',
    home: 'Home',
    findMaterials: 'Find Raw Materials',
    myOrders: 'My Orders',
    favoriteSuppliers: 'Favorite Suppliers',
    help: 'Help',
    todaysHighlights: 'Today\'s Highlights',
    oneStopSolution: 'Your One-Stop Solution for Street Food Vendors!',
    highQualityLowPrice: 'High-Quality, Low Price Raw Materials for Vendors',
    findRawMaterials: 'Find Raw Materials',
    myOrdersButton: 'My Orders',
    searchPlaceholder: 'e.g., Potato, Onion, Spice',
    orSearchByVoice: 'Or Search by Voice',
    exploreCategories: 'Explore Categories',
    vegetables: 'Vegetables',
    spices: 'Spices',
    pulses: 'Pulses',
    dairy: 'Dairy',
    milkAndCoconut: 'Milk & Coconut Water',
    freshVegetables: 'Fresh Vegetables',
    freshFruits: 'Fresh Fruits',
    milkProducts: 'Milk Products',
    gheeAndOils: 'Ghee & Oils',
    countrySpecials: 'Country Specials',
    eggs: 'Eggs',
    dryFruitsAndSeeds: 'Dry Fruits & Seeds',
    breads: 'Breads',
    cerealsAndMillets: 'Cereals & Millets',
    saltAndSugar: 'Salt & Sugar',
    naturalSpices: 'Natural Spices',
    attaAndRice: 'Atta & Rice',
    snacks: 'Snacks',
    addOns: 'Add-ons',
    breakfastCereal: 'Breakfast Cereal',
    offerZone: 'Offer Zone',
    suppliers: 'Suppliers',
    viewAllSuppliers: 'View All Suppliers',
    loadingSuppliers: 'Loading suppliers...',
    back: 'Back',
    fssaiCertified: 'FSSAI Certified',
    contact: 'Contact',
    products: 'Products',
    view: 'View',
    addToCart: 'Add to Cart',
    viewCart: 'View Cart',
    cart: 'Cart',
    myOrder: 'My Order',
    cartEmpty: 'Your cart is empty.',
    total: 'Total',
    placeOrder: 'Place Order',
    orderSuccess: 'Your order has been sent successfully! Awaiting supplier confirmation.',
    selectItemsForOrder: 'Please select items to order.',
    addedToCart: 'added to cart.',
    removedFromCart: 'removed from cart.',
    okay: 'Okay',
    todayCheaper: 'Cheaper Today!',
    todayExpensive: 'More Expensive Today!',
    normal: 'Normal',
    priceIncreased: 'Price Increased!',
    discount: '% discount!',
    allRightsReserved: 'All rights reserved.',
    loginTitle: 'Welcome to VendorHaat!',
    loginSubtitle: 'Empower your business.',
    mobileNumber: 'Mobile Number',
    enterMobileNumber: 'Enter Mobile Number',
    getOTP: 'Get OTP',
    loginButton: 'Login',
    signupButton: 'Sign Up',
    loginSuccess: 'Login successful!',
    invalidCredentials: 'Invalid credentials. Please try again.',
    backToFindMaterials: 'Back to Find Materials',
    backToSuppliers: 'Back to Suppliers',
    yourLocation: 'Your Location',
    enterLocation: 'Enter Location (e.g., Delhi)',
    applyFilter: 'Apply Filter',
    noSuppliersFound: 'No suppliers found for this location.',
    firstName: 'First Name',
    lastName: 'Last Name',
    address: 'Address',
    enterFirstName: 'Enter First Name',
    enterLastName: 'Enter Last Name',
    enterAddress: 'Enter Address',
    verifyOTP: 'Verify OTP',
    enterOTP: 'Enter OTP',
    invalidOTP: 'Invalid OTP. Please try again.',
    signupSuccess: 'Signup successful! Welcome.',
    alreadyHaveAccount: 'Already have an account? Login here',
    dontHaveAccount: 'Don\'t have an account? Sign up here',
    or: 'Or',
    profile: 'Profile',
    orderHistory: 'Order History',
    helpSupport: 'Help & Support',
    logout: 'Log Out',
    editProfile: 'Edit Profile',
    saveChanges: 'Save Changes',
    changeProfilePicture: 'Change Profile Picture',
    profileUpdated: 'Profile updated successfully!',
    noOrders: 'No orders yet.',
    faq: 'Frequently Asked Questions (FAQ)',
    downloadApp: 'Download App',
    specialOffers: 'Special Offers',
    bestSellingProducts: 'Best Selling Products',
    recentOrders: 'Recent Orders',
    viewAllOrders: 'View All Orders',
    analytics: 'Analytics',
  },
};

// --- Mock Data ---
const mockSuppliers = [
  { id: 's1', name: 'Gupta Vegetable Co.', location: 'Azadpur Mandi, Delhi', distance: '5 km', rating: 4.8, isFSSAICertified: true, products: [ { id: 'p1', name: 'Potatoes', price: 22, unit: 'kg', image: 'https://placehold.co/100x100/ADD8E6/000000?text=Aloo', priceTrend: 'down' }, { id: 'p2', name: 'Onions', price: 35, unit: 'kg', image: 'https://placehold.co/100x100/F0E68C/000000?text=Pyaj', priceTrend: 'stable' }, { id: 'p3', name: 'Tomatoes', price: 40, unit: 'kg', image: 'https://placehold.co/100x100/FF6347/FFFFFF?text=Tamatar', priceTrend: 'up' }, { id: 'p4', name: 'Ginger', price: 150, unit: 'kg', image: 'https://placehold.co/100x100/F5DEB3/000000?text=Adrak', priceTrend: 'stable' } ] },
  { id: 's2', name: 'Delhi Spice & Pulses', location: 'Old Delhi', distance: '8 km', rating: 4.5, isFSSAICertified: true, products: [ { id: 'p5', name: 'Tamarind', price: 120, unit: 'kg', image: 'https://placehold.co/100x100/8B4513/FFFFFF?text=Imli', priceTrend: 'down' }, { id: 'p6', name: 'Cumin Seeds', price: 250, unit: 'kg', image: 'https://placehold.co/100x100/D2B48C/000000?text=Jeera', priceTrend: 'stable' }, { id: 'p7', name: 'Chilli Powder', price: 180, unit: 'kg', image: 'https://placehold.co/100x100/DC143C/FFFFFF?text=Mirch', priceTrend: 'stable' }, { id: 'p12', name: 'Chana Dal', price: 90, unit: 'kg', image: 'https://placehold.co/100x100/FFD700/000000?text=Dal', priceTrend: 'stable' } ] },
  { id: 's3', name: 'Local Mandi Daily Deals', location: 'Karol Bagh, Delhi', distance: '2 km', rating: 3.9, isFSSAICertified: false, products: [ { id: 'p8', name: 'Potatoes', price: 20, unit: 'kg', image: 'https://placehold.co/100x100/ADD8E6/000000?text=Aloo', priceTrend: 'stable' }, { id: 'p9', name: 'Coriander', price: 10, unit: 'bunch', image: 'https://placehold.co/100x100/90EE90/000000?text=Dhania', priceTrend: 'up' } ] },
  { id: 's4', name: 'Aggarwal Dairy & Grocery', location: 'Lajpat Nagar, Delhi', distance: '10 km', rating: 4.7, isFSSAICertified: true, products: [ { id: 'p10', name: 'Cow Milk', price: 60, unit: 'litre', image: 'https://placehold.co/100x100/A2CCB6/000000?text=Milk', priceTrend: 'down' }, { id: 'p11', name: 'Desi Ghee', price: 550, unit: 'kg', image: 'https://placehold.co/100x100/FFD700/000000?text=Ghee', priceTrend: 'stable' }, { id: 'p13', name: 'Whole Wheat Atta', price: 45, unit: 'kg', image: 'https://placehold.co/100x100/DEB887/000000?text=Atta', priceTrend: 'stable' }, { id: 'p14', name: 'Eggs', price: 72, unit: 'dozen', image: 'https://placehold.co/100x100/F5F5DC/000000?text=Eggs', priceTrend: 'stable' } ] },
];
const mockOrderHistory = [
    { id: 'ord1', date: '2025-07-25', supplier: 'Gupta Vegetable Co.', total: 570, status: 'Delivered' },
    { id: 'ord2', date: '2025-07-23', supplier: 'Delhi Spice & Pulses', total: 2500, status: 'Delivered' },
    { id: 'ord3', date: '2025-07-20', supplier: 'Local Mandi Daily Deals', total: 150, status: 'Cancelled' },
];
const mockCategories = [
    { id: 'cat1', nameKey: 'milkAndCoconut', icon: '🥛' }, { id: 'cat2', nameKey: 'freshVegetables', icon: '🥦' }, { id: 'cat3', nameKey: 'freshFruits', icon: '🍌' }, { id: 'cat4', nameKey: 'milkProducts', icon: '🧀' }, { id: 'cat5', nameKey: 'gheeAndOils', icon: '🧈' }, { id: 'cat6', nameKey: 'countrySpecials', icon: '✨' }, { id: 'cat7', nameKey: 'eggs', icon: '🥚' }, { id: 'cat8', nameKey: 'pulses', icon: '🌱' }, { id: 'cat9', nameKey: 'dryFruitsAndSeeds', icon: '🥜' }, { id: 'cat10', nameKey: 'breads', icon: '🍞' }, { id: 'cat11', nameKey: 'cerealsAndMillets', icon: '🌾' }, { id: 'cat12', nameKey: 'saltAndSugar', icon: '🧂' }, { id: 'cat13', nameKey: 'naturalSpices', icon: '🌶️' }, { id: 'cat14', nameKey: 'attaAndRice', icon: '🍚' }, { id: 'cat15', nameKey: 'snacks', icon: '🍿' }, { id: 'cat16', nameKey: 'addOns', icon: '🛍️' }, { id: 'cat17', nameKey: 'breakfastCereal', icon: '🥣' }, { id: 'cat18', nameKey: 'offerZone', icon: '💲' },
];

const simulateApiCall = (data, delay = 500) => new Promise(resolve => setTimeout(() => resolve(data), delay));

// --- Reusable Components ---

const ConfirmationModal = ({ message, onClose, t }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm w-full text-center">
        <p className="text-xl font-semibold mb-4 text-gray-800">{message}</p>
        <button onClick={onClose} className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out">
          {t('okay')}
        </button>
      </div>
    </div>
);

const CategoryGrid = ({ categories, t }) => (
    <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">{t('exploreCategories')}</h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 text-center">
            {categories.map(category => (
                <button key={category.id} className="flex flex-col items-center justify-start p-2 rounded-xl hover:bg-gray-100 transition-all duration-200">
                    <span className="text-4xl w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-blue-100 rounded-full mb-2">{category.icon}</span>
                    <span className="text-xs sm:text-sm font-medium text-gray-700">{t(category.nameKey)}</span>
                </button>
            ))}
        </div>
    </div>
);

const SupplierCard = ({ supplier, onSelect, t }) => {
  const featuredProduct = supplier.products.find(p => p.name.includes('Potatoes')) || supplier.products[0];
  const priceTrendIcon = featuredProduct.priceTrend === 'down' ? '📉' : featuredProduct.priceTrend === 'up' ? '📈' : '➖';
  const priceTrendText = featuredProduct.priceTrend === 'down' ? t('todayCheaper') : featuredProduct.priceTrend === 'up' ? t('todayExpensive') : t('normal');

  return (
    <div onClick={() => onSelect(supplier)} className="bg-white rounded-xl shadow-md p-4 mb-4 flex flex-col sm:flex-row items-center cursor-pointer hover:shadow-lg transition-all duration-300 ease-in-out">
      <img src={`https://placehold.co/80x80/60A5FA/FFFFFF?text=${supplier.name.split(' ')[0]}`} alt={supplier.name} className="flex-shrink-0 mb-3 sm:mb-0 sm:mr-4 rounded-full border-2 border-blue-400" />
      <div className="flex-grow text-center sm:text-left">
        <h3 className="text-xl font-bold text-gray-800 mb-1">{supplier.name}</h3>
        <p className="text-sm text-gray-600 mb-1">{supplier.location}</p>
        <div className="flex items-center justify-center sm:justify-start mb-2">
          <span className="text-yellow-500 font-bold mr-1">⭐ {supplier.rating}</span>
          <span className="text-gray-500 text-sm">({supplier.distance})</span>
          {supplier.isFSSAICertified && <span className="ml-2 bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full">{t('fssaiCertified')}</span>}
        </div>
        {featuredProduct && <p className="text-md text-gray-700 font-semibold flex items-center justify-center sm:justify-start">{featuredProduct.name.split(' ')[0]}: ₹{featuredProduct.price}/{featuredProduct.unit}<span className={`ml-2 font-bold ${featuredProduct.priceTrend === 'down' ? 'text-green-600' : featuredProduct.priceTrend === 'up' ? 'text-red-600' : 'text-gray-500'}`}>{priceTrendIcon} {priceTrendText}</span></p>}
      </div>
      <button onClick={(e) => { e.stopPropagation(); onSelect(supplier); }} className="mt-3 sm:mt-0 sm:ml-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-5 rounded-lg shadow-md transition duration-300 ease-in-out flex-shrink-0">{t('view')}</button>
    </div>
  );
};

// --- Page Components ---

const AuthPage = ({ onLoginSuccess, t, currentLanguage, setCurrentLanguage }) => {
  const [authView, setAuthView] = useState('initial');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [loginMobile, setLoginMobile] = useState('');
  const [signupForm, setSignupForm] = useState({ firstName: '', lastName: '', mobileNumber: '', address: '', profilePicture: '' });
  const [otp, setOtp] = useState('');

  const handleLogin = async () => {
    setError(''); setLoading(true);
    await simulateApiCall({}, 1000);
    if (loginMobile === '1234567890') {
      onLoginSuccess({ firstName: 'Demo', lastName: 'User', mobileNumber: '1234567890', address: '123, Main Street, Delhi', profilePicture: '' });
    } else {
      setError(t('invalidCredentials'));
    }
    setLoading(false);
  };

  const handleSignup = async () => {
    setError(''); setLoading(true);
    if (!signupForm.firstName || !signupForm.mobileNumber) {
      setError('Please fill all required fields.'); setLoading(false); return;
    }
    await simulateApiCall({}, 1000);
    setLoading(false); setAuthView('otp');
  };

  const handleVerifyOtp = async () => {
    setError(''); setLoading(true);
    await simulateApiCall({}, 1000);
    if (otp === '123456') {
      onLoginSuccess(signupForm);
    } else {
      setError(t('invalidOTP'));
    }
    setLoading(false);
  };

  const renderContent = () => {
    switch(authView) {
      case 'login': return (<> <h2 className="text-3xl font-bold text-blue-700 mb-2">{t('loginButton')}</h2> {error && <p className="text-red-600 mb-4 font-semibold">{error}</p>} <div className="mb-6"> <label htmlFor="mobileNumber" className="block text-left text-gray-700 text-lg font-semibold mb-2">{t('mobileNumber')}</label> <input type="tel" id="mobileNumber" className="w-full p-4 border border-gray-300 rounded-lg text-lg" placeholder={t('enterMobileNumber')} value={loginMobile} onChange={(e) => setLoginMobile(e.target.value)} maxLength="10" /> </div> <button onClick={handleLogin} disabled={loading} className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all text-xl flex items-center justify-center disabled:opacity-50"> {loading ? <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-white"></div> : t('loginButton')} </button> <p className="text-sm text-gray-500 mt-4">Demo: Use mobile "1234567890"</p> <button onClick={() => setAuthView('initial')} className="mt-4 text-blue-600 hover:underline">{t('back')}</button> </>);
      case 'signup': return (<> <h2 className="text-3xl font-bold text-blue-700 mb-2">{t('signupButton')}</h2> {error && <p className="text-red-600 mb-4 font-semibold">{error}</p>} <div className="space-y-4 text-left"> <div> <label className="block text-gray-700 font-semibold mb-1">{t('firstName')}</label> <input type="text" value={signupForm.firstName} onChange={e => setSignupForm({...signupForm, firstName: e.target.value})} className="w-full p-3 border border-gray-300 rounded-lg" placeholder={t('enterFirstName')} /> </div> <div> <label className="block text-gray-700 font-semibold mb-1">{t('lastName')}</label> <input type="text" value={signupForm.lastName} onChange={e => setSignupForm({...signupForm, lastName: e.target.value})} className="w-full p-3 border border-gray-300 rounded-lg" placeholder={t('enterLastName')} /> </div> <div> <label className="block text-gray-700 font-semibold mb-1">{t('mobileNumber')}</label> <input type="tel" value={signupForm.mobileNumber} onChange={e => setSignupForm({...signupForm, mobileNumber: e.target.value})} className="w-full p-3 border border-gray-300 rounded-lg" placeholder={t('enterMobileNumber')} maxLength="10"/> </div> <div> <label className="block text-gray-700 font-semibold mb-1">{t('address')}</label> <input type="text" value={signupForm.address} onChange={e => setSignupForm({...signupForm, address: e.target.value})} className="w-full p-3 border border-gray-300 rounded-lg" placeholder={t('enterAddress')} /> </div> </div> <button onClick={handleSignup} disabled={loading} className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all text-xl flex items-center justify-center disabled:opacity-50"> {loading ? <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-white"></div> : t('getOTP')} </button> <button onClick={() => setAuthView('initial')} className="mt-4 text-blue-600 hover:underline">{t('back')}</button> </>);
      case 'otp': return (<> <h2 className="text-3xl font-bold text-blue-700 mb-2">{t('verifyOTP')}</h2> <p className="text-gray-600 mb-4">An OTP has been sent to {signupForm.mobileNumber}</p> {error && <p className="text-red-600 mb-4 font-semibold">{error}</p>} <div className="mb-6"> <label htmlFor="otp" className="block text-left text-gray-700 text-lg font-semibold mb-2">{t('enterOTP')}</label> <input type="tel" id="otp" className="w-full p-4 border border-gray-300 rounded-lg text-lg tracking-widest text-center" placeholder="_ _ _ _ _ _" value={otp} onChange={(e) => setOtp(e.target.value)} maxLength="6" /> </div> <button onClick={handleVerifyOtp} disabled={loading} className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all text-xl flex items-center justify-center disabled:opacity-50"> {loading ? <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-white"></div> : t('verifyOTP')} </button> <p className="text-sm text-gray-500 mt-4">Demo: Use OTP "123456"</p> <button onClick={() => setAuthView('signup')} className="mt-4 text-blue-600 hover:underline">{t('back')}</button> </>);
      default: return (<> <h2 className="text-4xl font-extrabold text-blue-700 mb-4">{t('loginTitle')}</h2> <p className="text-xl text-gray-700 mb-8">{t('loginSubtitle')}</p> <div className="space-y-4"> <button onClick={() => setAuthView('login')} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all duration-300 ease-in-out text-xl">{t('loginButton')}</button> <button onClick={() => setAuthView('signup')} className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all duration-300 ease-in-out text-xl">{t('signupButton')}</button> </div> </>);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/login-background.png')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute top-4 right-4 bg-white/30 backdrop-blur-sm rounded-lg p-1 flex space-x-1">
        <button onClick={() => setCurrentLanguage('en')} className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors ${currentLanguage === 'en' ? 'bg-white text-blue-700 shadow' : 'text-white'}`}>English</button>
        <button onClick={() => setCurrentLanguage('hi')} className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors ${currentLanguage === 'hi' ? 'bg-white text-blue-700 shadow' : 'text-white'}`}>हिन्दी</button>
      </div>
      <div className="relative bg-white/80 backdrop-blur-md p-8 sm:p-10 rounded-xl shadow-2xl max-w-md w-full text-center transform transition-all duration-500 ease-in-out">
        {renderContent()}
      </div>
    </div>
  );
};

const Sidebar = ({ isOpen, onClose, userProfile, setView, onLogout, t }) => {
    const handleNavigation = (view) => {
        setView(view);
        onClose();
    };
    return (
        <>
            <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={onClose}></div>
            <div className={`fixed top-0 left-0 h-full w-72 bg-gray-800 text-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="p-6 bg-gray-900">
                    <div className="relative w-24 h-24 mx-auto mb-4">
                        <img src={userProfile.profilePicture || `https://placehold.co/96x96/E2E8F0/4A5568?text=${userProfile.firstName.charAt(0)}`} alt="Profile" className="w-24 h-24 rounded-full object-cover border-4 border-blue-500" />
                        <button onClick={() => handleNavigation('profile')} className="absolute bottom-0 right-0 bg-blue-500 hover:bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-white border-2 border-gray-800">
                            <i className="fas fa-pencil-alt text-sm"></i>
                        </button>
                    </div>
                    <div className="text-center">
                        <p className="text-xl font-bold flex items-center justify-center"><i className="fas fa-user mr-2 text-gray-400"></i>{`${userProfile.firstName} ${userProfile.lastName}`}</p>
                        <p className="text-sm text-gray-400 flex items-center justify-center mt-1"><i className="fas fa-phone-alt mr-2 text-gray-400"></i>{userProfile.mobileNumber}</p>
                    </div>
                </div>
                <nav className="flex flex-col p-4">
                    <button onClick={() => handleNavigation('home')} className="flex items-center text-lg py-3 px-4 rounded-lg hover:bg-gray-700 transition-colors"><i className="fas fa-home w-6 mr-3"></i>{t('home')}</button>
                    <button onClick={() => handleNavigation('findMaterials')} className="flex items-center text-lg py-3 px-4 rounded-lg hover:bg-gray-700 transition-colors"><i className="fas fa-search w-6 mr-3"></i>{t('findMaterials')}</button>
                    <button onClick={() => handleNavigation('suppliers')} className="flex items-center text-lg py-3 px-4 rounded-lg hover:bg-gray-700 transition-colors"><i className="fas fa-store w-6 mr-3"></i>{t('suppliers')}</button>
                    <button onClick={() => handleNavigation('profile')} className="flex items-center text-lg py-3 px-4 rounded-lg hover:bg-gray-700 transition-colors"><i className="fas fa-user-circle w-6 mr-3"></i>{t('profile')}</button>
                    <button onClick={() => handleNavigation('orderHistory')} className="flex items-center text-lg py-3 px-4 rounded-lg hover:bg-gray-700 transition-colors"><i className="fas fa-history w-6 mr-3"></i>{t('orderHistory')}</button>
                    <button onClick={() => handleNavigation('help')} className="flex items-center text-lg py-3 px-4 rounded-lg hover:bg-gray-700 transition-colors"><i className="fas fa-question-circle w-6 mr-3"></i>{t('helpSupport')}</button>
                </nav>
                <div className="absolute bottom-0 w-full p-4">
                     <button onClick={onLogout} className="w-full flex items-center justify-center text-lg bg-red-600 hover:bg-red-700 py-3 px-4 rounded-lg transition-colors"><i className="fas fa-sign-out-alt w-6 mr-3"></i>{t('logout')}</button>
                </div>
            </div>
        </>
    );
};

const HomePage = ({ t, setView }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideImages = ['/1.png', '/2.png', '/3.png'];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === slideImages.length - 1 ? 0 : prev + 1));
        }, 3000);
        return () => clearInterval(timer);
    }, [slideImages.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slideImages.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slideImages.length - 1 : prev - 1));
    };

    return (
        <div>
            <div className="relative w-full mb-8 rounded-xl shadow-lg overflow-hidden">
                <div className="relative h-72 md:h-96 overflow-hidden">
                    {slideImages.map((src, index) => (
                        <img
                            key={src}
                            src={src}
                            alt={`Slide ${index + 1}`}
                            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                                }`}
                            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/1200x300/CCCCCC/FFFFFF?text=Banner+Not+Found'; }}
                        />
                    ))}
                </div>
                <button onClick={prevSlide} className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all">
                    &#10094;
                </button>
                <button onClick={nextSlide} className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all">
                    &#10095;
                </button>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {slideImages.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-gray-400'}`}
                        ></button>
                    ))}
                </div>
            </div>

            <div className="flex flex-col items-center justify-center text-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl mb-8">
                    <button onClick={() => setView('findMaterials')} className="bg-green-500 hover:bg-green-600 text-white font-bold py-6 px-8 rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center text-xl sm:text-2xl"><i className="fas fa-search text-3xl mr-3"></i>{t('findMaterials')}</button>
                    <button onClick={() => { /* Analytics page logic */ }} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-6 px-8 rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center text-xl sm:text-2xl"><i className="fas fa-chart-line text-3xl mr-3"></i>{t('analytics')}</button>
                </div>

                {/* New Sections */}
                <div className="w-full max-w-4xl space-y-8">
                    {/* Special Offers */}
                    <div className="bg-white rounded-xl shadow-lg p-6 text-left">
                        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center"><i className="fas fa-tags text-yellow-500 mr-3"></i>{t('specialOffers')}</h3>
                        <div className="space-y-3">
                            <div className="p-3 bg-yellow-50 rounded-lg">
                                <p className="font-semibold">20% off Spices</p>
                                <p className="text-sm text-gray-600">Limited time offer on all spices from Delhi Spice & Pulses.</p>
                            </div>
                            <div className="p-3 bg-yellow-50 rounded-lg">
                                <p className="font-semibold">Bulk Buy Discount</p>
                                <p className="text-sm text-gray-600">Get 10% extra on potato orders above 50kg.</p>
                            </div>
                        </div>
                    </div>

                    {/* Best Selling Products */}
                    <div className="bg-white rounded-xl shadow-lg p-6 text-left">
                        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center"><i className="fas fa-star text-purple-500 mr-3"></i>{t('bestSellingProducts')}</h3>
                        <div className="flex flex-wrap gap-4">
                            <span className="bg-purple-100 text-purple-800 font-semibold px-4 py-2 rounded-full">Potatoes</span>
                            <span className="bg-purple-100 text-purple-800 font-semibold px-4 py-2 rounded-full">Onions</span>
                            <span className="bg-purple-100 text-purple-800 font-semibold px-4 py-2 rounded-full">Tamarind</span>
                        </div>
                    </div>

                    {/* Recent Orders */}
                    <div className="bg-white rounded-xl shadow-lg p-6 text-left">
                        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center"><i className="fas fa-history text-blue-500 mr-3"></i>{t('recentOrders')}</h3>
                        <div className="space-y-2">
                            {mockOrderHistory.slice(0, 2).map(order => (
                                <div key={order.id} className="flex justify-between items-center p-3 border-b">
                                    <div>
                                        <p className="font-semibold">{order.supplier}</p>
                                        <p className="text-sm text-gray-500">{order.date}</p>
                                    </div>
                                    <p className="font-bold text-lg">₹{order.total}</p>
                                </div>
                            ))}
                        </div>
                        <button onClick={() => setView('orderHistory')} className="text-blue-600 hover:underline mt-4 font-semibold">{t('viewAllOrders')} →</button>
                    </div>
                </div>
            </div>
        </div>
    );
};


const FindMaterialsPage = ({ t, setView }) => (
    <div className="max-w-4xl mx-auto">
        <div className="relative mb-6">
            <input type="text" placeholder={`${t('searchPlaceholder')}`} className="w-full p-4 pl-12 pr-16 border border-gray-300 rounded-xl shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg" />
            <i className="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl"></i>
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors duration-200"><i className="fas fa-microphone text-xl"></i></button>
        </div>
        <CategoryGrid categories={mockCategories} t={t} />
        <div className="text-center mt-8">
            <button onClick={() => setView('suppliers')} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-all duration-300 ease-in-out text-xl">
                {t('viewAllSuppliers')}
            </button>
        </div>
    </div>
);

const SuppliersPage = ({ loading, t, userLocation, setUserLocation, filteredSuppliers, onSelectSupplier }) => (
    <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">{t('suppliers')}</h2>
        <div className="relative mb-4">
            <label htmlFor="locationSearch" className="block text-left text-gray-700 text-lg font-semibold mb-2">{t('yourLocation')}</label>
            <input type="text" id="locationSearch" placeholder={t('enterLocation')} className="w-full p-4 pl-12 border border-gray-300 rounded-xl shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg" value={userLocation} onChange={(e) => setUserLocation(e.target.value)} />
            <i className="fas fa-map-marker-alt absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl mt-4"></i>
        </div>
        {loading ? (
            <div className="text-center text-gray-600">{t('loadingSuppliers')}</div>
        ) : (
            filteredSuppliers.length > 0 ? (
                <div>{filteredSuppliers.map(s => <SupplierCard key={s.id} supplier={s} onSelect={onSelectSupplier} t={t} />)}</div>
            ) : (
                <p className="text-center text-gray-600 text-lg">{t('noSuppliersFound')}</p>
            )
        )}
    </div>
);

const ProfilePage = ({ user, onUpdateProfile, t }) => {
    const [formData, setFormData] = useState(user);
    const [showModal, setShowModal] = useState(false);
    const fileInputRef = useRef(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData({ ...formData, profilePicture: URL.createObjectURL(file) });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdateProfile(formData);
        setShowModal(true);
    };

    return (
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
            {showModal && <ConfirmationModal message={t('profileUpdated')} onClose={() => setShowModal(false)} t={t} />}
            <h2 className="text-3xl font-bold text-gray-800 mb-6">{t('editProfile')}</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col items-center">
                    <img src={formData.profilePicture || `https://placehold.co/128x128/E2E8F0/4A5568?text=${formData.firstName.charAt(0)}`} alt="Profile" className="w-32 h-32 rounded-full object-cover border-4 border-gray-200 mb-4" />
                    <input type="file" accept="image/*" ref={fileInputRef} onChange={handleFileChange} className="hidden" />
                    <button type="button" onClick={() => fileInputRef.current.click()} className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg">
                        {t('changeProfilePicture')}
                    </button>
                </div>
                <div>
                    <label className="block text-gray-700 font-semibold mb-1">{t('firstName')}</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg" />
                </div>
                <div>
                    <label className="block text-gray-700 font-semibold mb-1">{t('lastName')}</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg" />
                </div>
                 <div>
                    <label className="block text-gray-700 font-semibold mb-1">{t('mobileNumber')}</label>
                    <input type="tel" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg" maxLength="10" />
                </div>
                 <div>
                    <label className="block text-gray-700 font-semibold mb-1">{t('address')}</label>
                    <input type="text" name="address" value={formData.address} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg" />
                </div>
                <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg shadow-lg">{t('saveChanges')}</button>
            </form>
        </div>
    );
};

const OrderHistoryPage = ({t}) => (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">{t('orderHistory')}</h2>
        {mockOrderHistory.length > 0 ? (
            <div className="space-y-4">
                {mockOrderHistory.map(order => (
                    <div key={order.id} className="p-4 border rounded-lg flex justify-between items-center">
                        <div>
                            <p className="font-bold">{order.supplier}</p>
                            <p className="text-sm text-gray-500">Order ID: {order.id} | {order.date}</p>
                        </div>
                        <div className="text-right">
                             <p className="font-bold text-lg">₹{order.total}</p>
                             <span className={`px-2 py-1 text-xs font-semibold rounded-full ${order.status === 'Delivered' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>{order.status}</span>
                        </div>
                    </div>
                ))}
            </div>
        ) : (
            <p className="text-center text-gray-500">{t('noOrders')}</p>
        )}
    </div>
);

const HelpPage = ({t}) => (
     <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">{t('helpSupport')}</h2>
        <div className="space-y-6">
            <div>
                <h3 className="text-xl font-semibold mb-2">{t('faq')}</h3>
                <div className="space-y-2">
                    <p><strong>Q: How do I place an order?</strong></p>
                    <p>A: Navigate to 'Find Raw Materials', select a supplier, add items to your cart, and then place the order from the cart page.</p>
                    <p><strong>Q: How can I change my details?</strong></p>
                    <p>A: Open the side menu and go to the 'Profile' section to update your information.</p>
                </div>
            </div>
             <div>
                <h3 className="text-xl font-semibold mb-2">{t('contact')}</h3>
                <p>Email: support@vendorhaat.com</p>
                <p>Phone: +91 1800 123 4567</p>
            </div>
        </div>
    </div>
);


// --- Main App Component ---
function App() {
  const [view, setView] = useState('auth');
  const [userProfile, setUserProfile] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedSupplier, setSelectedSupplier] = useState(null);
  const [cart, setCart] = useState({});
  const [suppliers, setSuppliers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [userLocation, setUserLocation] = useState('');
  const t = (key) => (translations[currentLanguage] && translations[currentLanguage][key]) || translations['en'][key] || key;

  useEffect(() => {
    if (view === 'suppliers' && suppliers.length === 0) {
      setLoading(true);
      simulateApiCall(mockSuppliers, 1000).then(data => {
        setSuppliers(data);
        setLoading(false);
      });
    }
  }, [view, suppliers.length]);

  const handleLoginSuccess = (userData) => {
    setUserProfile(userData);
    setView('home');
  };

  const handleLogout = () => {
    setUserProfile(null);
    setView('auth');
    setIsSidebarOpen(false);
    setCart({});
  };
  
  const handleUpdateProfile = (updatedProfile) => {
      setUserProfile(updatedProfile);
  };

  const handleSelectSupplier = (supplier) => {
      setSelectedSupplier(supplier);
      setView('supplierDetail');
  };

  const addToCart = (product, quantity) => {
    setCart(prevCart => {
      const newCart = { ...prevCart };
      if (quantity > 0) newCart[product.id] = { ...product, quantity };
      else delete newCart[product.id];
      return newCart;
    });
  };

  const getCartTotal = () => Object.values(cart).reduce((total, item) => total + (item.price * item.quantity), 0);

  const placeOrder = () => {
    if (Object.keys(cart).length === 0) {
      setModalMessage(t('selectItemsForOrder')); setShowModal(true); return;
    }
    setLoading(true);
    simulateApiCall({ success: true }, 1500).then(() => {
      setLoading(false);
      setModalMessage(t('orderSuccess'));
      setShowModal(true);
      setCart({});
      setView('home');
    });
  };

  const handleModalClose = () => { setShowModal(false); setModalMessage(''); };

  const availableLanguages = [{ code: 'hi', name: 'हिन्दी' }, { code: 'en', name: 'English' }];
  const filteredSuppliers = suppliers.filter(s => userLocation === '' || s.location.toLowerCase().includes(userLocation.toLowerCase()));

  if (view === 'auth') {
    return <AuthPage onLoginSuccess={handleLoginSuccess} t={t} currentLanguage={currentLanguage} setCurrentLanguage={setCurrentLanguage} />;
  }
  
  const renderContent = () => {
    switch(view) {
        case 'home':
            return <HomePage t={t} setView={setView} />;
        case 'findMaterials':
            return <FindMaterialsPage t={t} setView={setView} />;
        case 'suppliers':
            return <SuppliersPage loading={loading} t={t} userLocation={userLocation} setUserLocation={setUserLocation} filteredSuppliers={filteredSuppliers} onSelectSupplier={handleSelectSupplier} />;
        case 'supplierDetail':
            return (
                selectedSupplier && (
                    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6">
                        <button onClick={() => setView('suppliers')} className="mb-4 text-blue-600 hover:text-blue-800 font-semibold flex items-center"><i className="fas fa-arrow-left mr-2"></i>{t('backToSuppliers')}</button>
                        <h2 className="text-3xl font-bold text-gray-800 mb-2">{selectedSupplier.name}</h2>
                        <p className="text-md text-gray-600 mb-3">{selectedSupplier.location}</p>
                        <div className="flex items-center mb-4"><span className="text-yellow-500 font-bold text-lg mr-2">⭐ {selectedSupplier.rating}</span><span className="text-gray-500 text-sm">({selectedSupplier.distance})</span>{selectedSupplier.isFSSAICertified && <span className="ml-3 bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full">{t('fssaiCertified')}</span>}</div>
                        <p className="text-gray-700 mb-6">{t('contact')}: {selectedSupplier.contact || '+91-99999XXXXX'}</p>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">{t('products')}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{selectedSupplier.products.map(p => (<div key={p.id} className="bg-gray-50 rounded-lg p-4 shadow-sm flex items-center"><img src={p.image} alt={p.name} className="w-20 h-20 rounded-lg mr-4 object-cover border border-gray-200" /><div className="flex-grow"><h4 className="text-xl font-semibold text-gray-800">{p.name}</h4><p className="text-lg text-green-700 font-bold">₹{p.price} / {p.unit}</p><div className="flex items-center mt-2"><button onClick={() => addToCart(p, (cart[p.id]?.quantity || 0) - 1)} className="bg-red-400 text-white text-xl font-bold w-8 h-8 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors">-</button><span className="mx-3 text-lg font-semibold text-gray-800">{cart[p.id]?.quantity || 0}</span><button onClick={() => addToCart(p, (cart[p.id]?.quantity || 0) + 1)} className="bg-green-400 text-white text-xl font-bold w-8 h-8 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors">+</button></div></div></div>))}</div>
                        <button onClick={() => setView('cart')} className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all duration-300 ease-in-out text-xl flex items-center justify-center"><i className="fas fa-shopping-cart mr-3"></i>{t('viewCart')} ({Object.keys(cart).length})</button>
                    </div>
                )
            );
        case 'cart':
            return (
                <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6">
                    <button onClick={() => setView('suppliers')} className="mb-4 text-blue-600 hover:text-blue-800 font-semibold flex items-center"><i className="fas fa-arrow-left mr-2"></i>{t('backToSuppliers')}</button>
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">{t('myOrder')}</h2>
                    {Object.keys(cart).length === 0 ? <p className="text-center text-gray-600 text-lg">{t('cartEmpty')}</p> : (<>{Object.values(cart).map(item => (<div key={item.id} className="flex items-center justify-between bg-gray-50 p-4 rounded-lg mb-4 shadow-sm"><div className="flex items-center"><img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg mr-4 object-cover border border-gray-200" /><div><h4 className="text-xl font-semibold text-gray-800">{item.name}</h4><p className="text-gray-600">{item.quantity} {item.unit} x ₹{item.price}/{item.unit}</p></div></div><p className="text-lg font-bold text-blue-700">₹{item.quantity * item.price}</p></div>))}<div className="border-t-2 border-gray-200 pt-4 mt-6 flex justify-between items-center"><h3 className="text-2xl font-bold text-gray-800">{t('total')}</h3><p className="text-3xl font-extrabold text-green-700">₹{getCartTotal()}</p></div><button onClick={placeOrder} className="mt-8 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all duration-300 ease-in-out text-xl flex items-center justify-center"><i className="fas fa-check-circle mr-3"></i>{t('placeOrder')}</button></>)}
                </div>
            );
        case 'profile':
            return <ProfilePage user={userProfile} onUpdateProfile={handleUpdateProfile} t={t} />;
        case 'orderHistory':
            return <OrderHistoryPage t={t} />;
        case 'help':
            return <HelpPage t={t} />;
        default:
            return <HomePage t={t} setView={setView} />;
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 flex flex-col">
      {userProfile && <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} userProfile={userProfile} setView={setView} onLogout={handleLogout} t={t} />}
      
      <header className="bg-white shadow-md p-4 flex items-center justify-between sticky top-0 z-30">
        <div className="flex items-center">
            <button onClick={() => setIsSidebarOpen(true)} className="mr-4 text-gray-600 hover:text-blue-700 text-2xl">
                <i className="fas fa-bars"></i>
            </button>
            <h1 className="text-2xl font-extrabold text-blue-700 cursor-pointer" onClick={() => setView('home')}>{t('appName')}</h1>
        </div>
        <nav className="flex items-center">
          <select value={currentLanguage} onChange={(e) => setCurrentLanguage(e.target.value)} className="bg-gray-100 border border-gray-300 rounded-lg px-3 py-2 text-sm mr-4 focus:ring-blue-500 focus:border-blue-500">
            {availableLanguages.map(lang => <option key={lang.code} value={lang.code}>{lang.name}</option>)}
          </select>
          <button onClick={() => setView('cart')} className="relative text-gray-600 hover:text-blue-700 text-2xl">
            <i className="fas fa-shopping-cart"></i>
            {Object.keys(cart).length > 0 && <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">{Object.keys(cart).length}</span>}
          </button>
        </nav>
      </header>

      {loading && <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"><div className="flex flex-col items-center text-white text-xl font-semibold"><div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-400 mb-4"></div>{t('loadingSuppliers')}</div></div>}
      {showModal && <ConfirmationModal message={modalMessage} onClose={handleModalClose} t={t} />}

      <main className="flex-grow container mx-auto p-4 sm:p-6">
        {renderContent()}
      </main>

      <footer className="bg-gray-800 text-white text-center p-6 mt-auto">
        <div className="mb-4">
            <h3 className="font-bold text-lg mb-2">{t('downloadApp')}</h3>
            <div className="flex justify-center gap-4">
                <a href="#" className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg flex items-center transition-colors">
                    <i className="fab fa-apple text-xl mr-2"></i>
                    <div>
                        <p className="text-xs leading-none">Download on the</p>
                        <p className="text-lg font-semibold leading-none">App Store</p>
                    </div>
                </a>
                <a href="#" className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg flex items-center transition-colors">
                    <i className="fab fa-google-play text-xl mr-2"></i>
                    <div>
                        <p className="text-xs leading-none">GET IT ON</p>
                        <p className="text-lg font-semibold leading-none">Google Play</p>
                    </div>
                </a>
            </div>
        </div>
        <p className="text-sm mt-4">&copy; 2025 {t('appName')}. {t('allRightsReserved')}</p>
      </footer>

      {/* External scripts and styles */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" xintegrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0V4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      <script src="https://cdn.tailwindcss.com"></script>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      <style>{`body { font-family: 'Inter', sans-serif; }`}</style>
    </div>
  );
}

export default App;