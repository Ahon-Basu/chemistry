
        // All 118 elements with Bengali names and properties
        const elements = [
            { number: 1, symbol: "H", name: "হাইড্রোজেন", latin: "Hydrogenium", category: "nonmetal", mass: "1.008", electrons: "1", valence: "1", discovery: "1766", discoverer: "হেনরি ক্যাভেন্ডিশ", state: "গ্যাস", density: "0.00008988 g/cm³", melt: "-259.16°C", boil: "-252.87°C" },
            { number: 2, symbol: "He", name: "হিলিয়াম", latin: "Helium", category: "noble-gas", mass: "4.0026", electrons: "2", valence: "0", discovery: "1868", discoverer: "পিয়েরে জ্যানসেন", state: "গ্যাস", density: "0.0001785 g/cm³", melt: "-272.20°C", boil: "-268.93°C" },
            { number: 3, symbol: "Li", name: "লিথিয়াম", latin: "Lithium", category: "alkali", mass: "6.94", electrons: "2,1", valence: "1", discovery: "1817", discoverer: "জোহান অগাস্ট আরফভেডসন", state: "কঠিন", density: "0.534 g/cm³", melt: "180.54°C", boil: "1342°C" },
            { number: 4, symbol: "Be", name: "বেরিলিয়াম", latin: "Beryllium", category: "alkaline-earth", mass: "9.0122", electrons: "2,2", valence: "2", discovery: "1798", discoverer: "লুই নিকোলাস ভকেলিন", state: "কঠিন", density: "1.85 g/cm³", melt: "1287°C", boil: "2469°C" },
            { number: 5, symbol: "B", name: "বোরন", latin: "Borum", category: "metalloid", mass: "10.81", electrons: "2,3", valence: "3", discovery: "1808", discoverer: "জোসেফ লুই গে-লুসাক", state: "কঠিন", density: "2.34 g/cm³", melt: "2076°C", boil: "3927°C" },
            { number: 6, symbol: "C", name: "কার্বন", latin: "Carbonium", category: "nonmetal", mass: "12.011", electrons: "2,4", valence: "4", discovery: "প্রাচীনকাল", discoverer: "অজানা", state: "কঠিন", density: "2.267 g/cm³", melt: "3500°C", boil: "4827°C" },
            { number: 7, symbol: "N", name: "নাইট্রোজেন", latin: "Nitrogenium", category: "nonmetal", mass: "14.007", electrons: "2,5", valence: "3", discovery: "1772", discoverer: "ড্যানিয়েল রাদারফোর্ড", state: "গ্যাস", density: "0.0012506 g/cm³", melt: "-210.00°C", boil: "-195.79°C" },
            { number: 8, symbol: "O", name: "অক্সিজেন", latin: "Oxygenium", category: "nonmetal", mass: "15.999", electrons: "2,6", valence: "2", discovery: "1774", discoverer: "জোসেফ প্রিস্টলি", state: "গ্যাস", density: "0.001429 g/cm³", melt: "-218.79°C", boil: "-182.95°C" },
            { number: 9, symbol: "F", name: "ফ্লোরিন", latin: "Fluorum", category: "halogen", mass: "18.998", electrons: "2,7", valence: "1", discovery: "1886", discoverer: "হেনরি মোইসান", state: "গ্যাস", density: "0.001696 g/cm³", melt: "-219.67°C", boil: "-188.11°C" },
            { number: 10, symbol: "Ne", name: "নিয়ন", latin: "Neon", category: "noble-gas", mass: "20.180", electrons: "2,8", valence: "0", discovery: "1898", discoverer: "উইলিয়াম র্যামসে", state: "গ্যাস", density: "0.0008999 g/cm³", melt: "-248.59°C", boil: "-246.05°C" },
            { number: 11, symbol: "Na", name: "সোডিয়াম", latin: "Natrium", category: "alkali", mass: "22.990", electrons: "2,8,1", valence: "1", discovery: "1807", discoverer: "হামফ্রি ডেভি", state: "কঠিন", density: "0.968 g/cm³", melt: "97.72°C", boil: "883°C" },
            { number: 12, symbol: "Mg", name: "ম্যাগনেসিয়াম", latin: "Magnesium", category: "alkaline-earth", mass: "24.305", electrons: "2,8,2", valence: "2", discovery: "1755", discoverer: "জোসেফ ব্ল্যাক", state: "কঠিন", density: "1.738 g/cm³", melt: "650°C", boil: "1090°C" },
            { number: 13, symbol: "Al", name: "অ্যালুমিনিয়াম", latin: "Aluminium", category: "post-transition", mass: "26.982", electrons: "2,8,3", valence: "3", discovery: "1825", discoverer: "হান্স ক্রিস্টিয়ান অর্স্টেড", state: "কঠিন", density: "2.70 g/cm³", melt: "660.32°C", boil: "2519°C" },
            { number: 14, symbol: "Si", name: "সিলিকন", latin: "Silicium", category: "metalloid", mass: "28.085", electrons: "2,8,4", valence: "4", discovery: "1824", discoverer: "জন্স জ্যাকব বার্জেলিয়াস", state: "কঠিন", density: "2.3290 g/cm³", melt: "1414°C", boil: "3265°C" },
            { number: 15, symbol: "P", name: "ফসফরাস", latin: "Phosphorus", category: "nonmetal", mass: "30.974", electrons: "2,8,5", valence: "3", discovery: "1669", discoverer: "হেনিগ ব্র্যান্ড", state: "কঠিন", density: "1.823 g/cm³", melt: "44.15°C", boil: "280.5°C" },
            { number: 16, symbol: "S", name: "সালফার", latin: "Sulphur", category: "nonmetal", mass: "32.06", electrons: "2,8,6", valence: "2", discovery: "প্রাচীনকাল", discoverer: "অজানা", state: "কঠিন", density: "2.067 g/cm³", melt: "115.21°C", boil: "444.61°C" },
            { number: 17, symbol: "Cl", name: "ক্লোরিন", latin: "Chlorum", category: "halogen", mass: "35.45", electrons: "2,8,7", valence: "1", discovery: "1774", discoverer: "কার্ল উইলহেল্ম শিলে", state: "গ্যাস", density: "0.003214 g/cm³", melt: "-101.5°C", boil: "-34.04°C" },
            { number: 18, symbol: "Ar", name: "আর্গন", latin: "Argon", category: "noble-gas", mass: "39.948", electrons: "2,8,8", valence: "0", discovery: "1894", discoverer: "লর্ড রেলি", state: "গ্যাস", density: "0.0017837 g/cm³", melt: "-189.34°C", boil: "-185.85°C" },
            { number: 19, symbol: "K", name: "পটাশিয়াম", latin: "Kalium", category: "alkali", mass: "39.098", electrons: "2,8,8,1", valence: "1", discovery: "1807", discoverer: "হামফ্রি ডেভি", state: "কঠিন", density: "0.862 g/cm³", melt: "63.38°C", boil: "759°C" },
            { number: 20, symbol: "Ca", name: "ক্যালসিয়াম", latin: "Calcium", category: "alkaline-earth", mass: "40.078", electrons: "2,8,8,2", valence: "2", discovery: "1808", discoverer: "হামফ্রি ডেভি", state: "কঠিন", density: "1.54 g/cm³", melt: "842°C", boil: "1484°C" },
            { number: 21, symbol: "Sc", name: "স্ক্যানডিয়াম", latin: "Scandium", category: "transition", mass: "44.956", electrons: "2,8,9,2", valence: "3", discovery: "1879", discoverer: "লার্স নিলসন", state: "কঠিন", density: "2.985 g/cm³", melt: "1541°C", boil: "2836°C" },
    { number: 22, symbol: "Ti", name: "টাইটানিয়াম", latin: "Titanium", category: "transition", mass: "47.867", electrons: "2,8,10,2", valence: "4", discovery: "1791", discoverer: "উইলিয়াম গ্রেগর", state: "কঠিন", density: "4.506 g/cm³", melt: "1668°C", boil: "3287°C" },
    { number: 23, symbol: "V", name: "ভ্যানাডিয়াম", latin: "Vanadium", category: "transition", mass: "50.942", electrons: "2,8,11,2", valence: "5", discovery: "1801", discoverer: "আন্দ্রেস মানুয়েল দেল রিও", state: "কঠিন", density: "6.11 g/cm³", melt: "1910°C", boil: "3407°C" },
    { number: 24, symbol: "Cr", name: "ক্রোমিয়াম", latin: "Chromium", category: "transition", mass: "51.996", electrons: "2,8,13,1", valence: "6", discovery: "1797", discoverer: "লুই নিকোলাস ভকেলিন", state: "কঠিন", density: "7.15 g/cm³", melt: "1907°C", boil: "2671°C" },
    { number: 25, symbol: "Mn", name: "ম্যাঙ্গানিজ", latin: "Manganum", category: "transition", mass: "54.938", electrons: "2,8,13,2", valence: "7", discovery: "1774", discoverer: "জোহান গটলিব গাহন", state: "কঠিন", density: "7.21 g/cm³", melt: "1246°C", boil: "2061°C" },
    { number: 26, symbol: "Fe", name: "লোহা", latin: "Ferrum", category: "transition", mass: "55.845", electrons: "2,8,14,2", valence: "2,3", discovery: "প্রাচীনকাল", discoverer: "অজানা", state: "কঠিন", density: "7.874 g/cm³", melt: "1538°C", boil: "2862°C" },
    { number: 27, symbol: "Co", name: "কোবাল্ট", latin: "Cobaltum", category: "transition", mass: "58.933", electrons: "2,8,15,2", valence: "2,3", discovery: "1735", discoverer: "জর্জ ব্র্যান্ড্ট", state: "কঠিন", density: "8.90 g/cm³", melt: "1495°C", boil: "2927°C" },
    { number: 28, symbol: "Ni", name: "নিকেল", latin: "Niccolum", category: "transition", mass: "58.693", electrons: "2,8,16,2", valence: "2", discovery: "1751", discoverer: "অ্যাক্সেল ফ্রেডরিক ক্রনস্টেড্ট", state: "কঠিন", density: "8.908 g/cm³", melt: "1455°C", boil: "2913°C" },
    { number: 29, symbol: "Cu", name: "তামা", latin: "Cuprum", category: "transition", mass: "63.546", electrons: "2,8,18,1", valence: "1,2", discovery: "প্রাচীনকাল", discoverer: "অজানা", state: "কঠিন", density: "8.96 g/cm³", melt: "1084.62°C", boil: "2562°C" },
    { number: 30, symbol: "Zn", name: "দস্তা", latin: "Zincum", category: "transition", mass: "65.38", electrons: "2,8,18,2", valence: "2", discovery: "প্রাচীনকাল", discoverer: "অজানা", state: "কঠিন", density: "7.134 g/cm³", melt: "419.53°C", boil: "907°C" },
    { number: 31, symbol: "Ga", name: "গ্যালিয়াম", latin: "Gallium", category: "post-transition", mass: "69.723", electrons: "2,8,18,3", valence: "3", discovery: "1875", discoverer: "পল এমিল লেকক ডি বোইসবাউড্রান", state: "কঠিন", density: "5.907 g/cm³", melt: "29.76°C", boil: "2204°C" },
    { number: 32, symbol: "Ge", name: "জার্মেনিয়াম", latin: "Germanium", category: "metalloid", mass: "72.630", electrons: "2,8,18,4", valence: "4", discovery: "1886", discoverer: "ক্লেমেন্স উইঙ্কলার", state: "কঠিন", density: "5.323 g/cm³", melt: "938.25°C", boil: "2833°C" },
    { number: 33, symbol: "As", name: "আর্সেনিক", latin: "Arsenicum", category: "metalloid", mass: "74.922", electrons: "2,8,18,5", valence: "3,5", discovery: "প্রাচীনকাল", discoverer: "অজানা", state: "কঠিন", density: "5.727 g/cm³", melt: "817°C", boil: "614°C" },
    { number: 34, symbol: "Se", name: "সেলেনিয়াম", latin: "Selenium", category: "nonmetal", mass: "78.971", electrons: "2,8,18,6", valence: "2,4,6", discovery: "1817", discoverer: "ইয়নস জ্যাকব বার্জেলিয়াস", state: "কঠিন", density: "4.809 g/cm³", melt: "221°C", boil: "685°C" },
    { number: 35, symbol: "Br", name: "ব্রোমিন", latin: "Bromum", category: "halogen", mass: "79.904", electrons: "2,8,18,7", valence: "1", discovery: "1826", discoverer: "অ্যান্টনি জেরোম বালার্ড", state: "তরল", density: "3.1028 g/cm³", melt: "-7.2°C", boil: "58.8°C" },
    { number: 36, symbol: "Kr", name: "ক্রিপ্টন", latin: "Krypton", category: "noble-gas", mass: "83.798", electrons: "2,8,18,8", valence: "0", discovery: "1898", discoverer: "উইলিয়াম র্যামসে", state: "গ্যাস", density: "0.003733 g/cm³", melt: "-157.36°C", boil: "-153.22°C" },
    { number: 37, symbol: "Rb", name: "রুবিডিয়াম", latin: "Rubidium", category: "alkali", mass: "85.468", electrons: "2,8,18,8,1", valence: "1", discovery: "1861", discoverer: "রবার্ট বুনসেন", state: "কঠিন", density: "1.532 g/cm³", melt: "39.31°C", boil: "688°C" },
    { number: 38, symbol: "Sr", name: "স্ট্রনশিয়াম", latin: "Strontium", category: "alkaline-earth", mass: "87.62", electrons: "2,8,18,8,2", valence: "2", discovery: "1790", discoverer: "আডেয়ার ক্রফোর্ড", state: "কঠিন", density: "2.64 g/cm³", melt: "777°C", boil: "1382°C" },
    { number: 39, symbol: "Y", name: "ইট্রিয়াম", latin: "Yttrium", category: "transition", mass: "88.906", electrons: "2,8,18,9,2", valence: "3", discovery: "1794", discoverer: "জোহান গ্যাডোলিন", state: "কঠিন", density: "4.472 g/cm³", melt: "1526°C", boil: "3345°C" },
    { number: 40, symbol: "Zr", name: "জিরকোনিয়াম", latin: "Zirconium", category: "transition", mass: "91.224", electrons: "2,8,18,10,2", valence: "4", discovery: "1789", discoverer: "মার্টিন হেনরিক ক্লাপ্রথ", state: "কঠিন", density: "6.506 g/cm³", melt: "1855°C", boil: "4409°C" },
    { number: 41, symbol: "Nb", name: "নাইওবিয়াম", latin: "Niobium", category: "transition", mass: "92.906", electrons: "2,8,18,12,1", valence: "5", discovery: "1801", discoverer: "চার্লস হ্যাচেট", state: "কঠিন", density: "8.57 g/cm³", melt: "2477°C", boil: "4744°C" },
    { number: 42, symbol: "Mo", name: "মলিবডেনাম", latin: "Molybdenum", category: "transition", mass: "95.95", electrons: "2,8,18,13,1", valence: "6", discovery: "1778", discoverer: "কার্ল উইলহেল্ম শিলে", state: "কঠিন", density: "10.22 g/cm³", melt: "2623°C", boil: "4639°C" },
    { number: 43, symbol: "Tc", name: "টেকনেসিয়াম", latin: "Technetium", category: "transition", mass: "(98)", electrons: "2,8,18,13,2", valence: "7", discovery: "1937", discoverer: "কার্লো পেরিয়ার ও এমিলিও সেগরে", state: "কঠিন", density: "11 g/cm³", melt: "2157°C", boil: "4265°C" },
    { number: 44, symbol: "Ru", name: "রুথেনিয়াম", latin: "Ruthenium", category: "transition", mass: "101.07", electrons: "2,8,18,15,1", valence: "3", discovery: "1844", discoverer: "কার্ল আর্নস্ট ক্লাউস", state: "কঠিন", density: "12.45 g/cm³", melt: "2334°C", boil: "4150°C" },
    { number: 45, symbol: "Rh", name: "রোডিয়াম", latin: "Rhodium", category: "transition", mass: "102.91", electrons: "2,8,18,16,1", valence: "3", discovery: "1803", discoverer: "উইলিয়াম হাইড ওলাস্টন", state: "কঠিন", density: "12.41 g/cm³", melt: "1964°C", boil: "3695°C" },
    { number: 46, symbol: "Pd", name: "প্যালাডিয়াম", latin: "Palladium", category: "transition", mass: "106.42", electrons: "2,8,18,18", valence: "2,4", discovery: "1803", discoverer: "উইলিয়াম হাইড ওলাস্টন", state: "কঠিন", density: "12.02 g/cm³", melt: "1554.9°C", boil: "2963°C" },
    { number: 47, symbol: "Ag", name: "রূপা", latin: "Argentum", category: "transition", mass: "107.87", electrons: "2,8,18,18,1", valence: "1", discovery: "প্রাচীনকাল", discoverer: "অজানা", state: "কঠিন", density: "10.49 g/cm³", melt: "961.78°C", boil: "2162°C" },
    { number: 48, symbol: "Cd", name: "ক্যাডমিয়াম", latin: "Cadmium", category: "transition", mass: "112.41", electrons: "2,8,18,18,2", valence: "2", discovery: "1817", discoverer: "ফ্রিডরিখ স্ট্রোমেয়ার", state: "কঠিন", density: "8.65 g/cm³", melt: "321.07°C", boil: "767°C" },
    { number: 49, symbol: "In", name: "ইন্ডিয়াম", latin: "Indium", category: "post-transition", mass: "114.82", electrons: "2,8,18,18,3", valence: "3", discovery: "1863", discoverer: "ফার্ডিনান্ড রিচ ও হিয়েরোনিমাস থিওডোর রিচার্ট", state: "কঠিন", density: "7.31 g/cm³", melt: "156.60°C", boil: "2072°C" },
    { number: 50, symbol: "Sn", name: "টিন", latin: "Stannum", category: "post-transition", mass: "118.71", electrons: "2,8,18,18,4", valence: "2,4", discovery: "প্রাচীনকাল", discoverer: "অজানা", state: "কঠিন", density: "7.287 g/cm³", melt: "231.93°C", boil: "2602°C" },
    { number: 51, symbol: "Sb", name: "অ্যান্টিমনি", latin: "Stibium", category: "metalloid", mass: "121.76", electrons: "2,8,18,18,5", valence: "3,5", discovery: "প্রাচীনকাল", discoverer: "অজানা", state: "কঠিন", density: "6.685 g/cm³", melt: "630.63°C", boil: "1587°C" },
    { number: 52, symbol: "Te", name: "টেলুরিয়াম", latin: "Tellurium", category: "metalloid", mass: "127.60", electrons: "2,8,18,18,6", valence: "2,4,6", discovery: "1782", discoverer: "ফ্রানজ-জোসেফ মুলার ভন রিচেনস্টেইন", state: "কঠিন", density: "6.232 g/cm³", melt: "449.51°C", boil: "988°C" },
    { number: 53, symbol: "I", name: "আয়োডিন", latin: "Iodum", category: "halogen", mass: "126.90", electrons: "2,8,18,18,7", valence: "1", discovery: "1811", discoverer: "বার্নার্ড কোর্টোইস", state: "কঠিন", density: "4.933 g/cm³", melt: "113.7°C", boil: "184.3°C" },
    { number: 54, symbol: "Xe", name: "জেনন", latin: "Xenon", category: "noble-gas", mass: "131.29", electrons: "2,8,18,18,8", valence: "0", discovery: "1898", discoverer: "উইলিয়াম র্যামসে", state: "গ্যাস", density: "0.005887 g/cm³", melt: "-111.75°C", boil: "-108.12°C" },
    { number: 55, symbol: "Cs", name: "সিজিয়াম", latin: "Caesium", category: "alkali", mass: "132.91", electrons: "2,8,18,18,8,1", valence: "1", discovery: "1860", discoverer: "রবার্ট বুনসেন", state: "কঠিন", density: "1.873 g/cm³", melt: "28.44°C", boil: "671°C" },
    { number: 56, symbol: "Ba", name: "বেরিয়াম", latin: "Barium", category: "alkaline-earth", mass: "137.33", electrons: "2,8,18,18,8,2", valence: "2", discovery: "1808", discoverer: "হামফ্রি ডেভি", state: "কঠিন", density: "3.594 g/cm³", melt: "727°C", boil: "1897°C" },
    { number: 57, symbol: "La", name: "ল্যান্থানাম", latin: "Lanthanum", category: "lanthanide", mass: "138.91", electrons: "2,8,18,18,9,2", valence: "3", discovery: "1839", discoverer: "কার্ল গুস্তাফ মোসান্ডার", state: "কঠিন", density: "6.162 g/cm³", melt: "920°C", boil: "3464°C" },
    { number: 58, symbol: "Ce", name: "সেরিয়াম", latin: "Cerium", category: "lanthanide", mass: "140.12", electrons: "2,8,18,19,9,2", valence: "3,4", discovery: "1803", discoverer: "মার্টিন হেনরিক ক্লাপ্রথ", state: "কঠিন", density: "6.770 g/cm³", melt: "795°C", boil: "3443°C" },
    { number: 59, symbol: "Pr", name: "প্রাসিওডিমিয়াম", latin: "Praseodymium", category: "lanthanide", mass: "140.91", electrons: "2,8,18,21,8,2", valence: "3", discovery: "1885", discoverer: "কার্ল আউয়ার ভন ওয়েলসবাচ", state: "কঠিন", density: "6.77 g/cm³", melt: "935°C", boil: "3520°C" },
    { number: 60, symbol: "Nd", name: "নিওডিমিয়াম", latin: "Neodymium", category: "lanthanide", mass: "144.24", electrons: "2,8,18,22,8,2", valence: "3", discovery: "1885", discoverer: "কার্ল আউয়ার ভন ওয়েলসবাচ", state: "কঠিন", density: "7.01 g/cm³", melt: "1024°C", boil: "3074°C" },
    { number: 61, symbol: "Pm", name: "প্রমিথিয়াম", latin: "Promethium", category: "lanthanide", mass: "(145)", electrons: "2,8,18,23,8,2", valence: "3", discovery: "1945", discoverer: "জ্যাকব এ. মারিনস্কি", state: "কঠিন", density: "7.26 g/cm³", melt: "1042°C", boil: "3000°C" },
    { number: 62, symbol: "Sm", name: "সামারিয়াম", latin: "Samarium", category: "lanthanide", mass: "150.36", electrons: "2,8,18,24,8,2", valence: "3", discovery: "1879", discoverer: "পল এমিল লেকক ডি বোইসবাউড্রান", state: "কঠিন", density: "7.52 g/cm³", melt: "1072°C", boil: "1900°C" },
    { number: 63, symbol: "Eu", name: "ইউরোপিয়াম", latin: "Europium", category: "lanthanide", mass: "151.96", electrons: "2,8,18,25,8,2", valence: "3", discovery: "1901", discoverer: "ইউজিন-আনাটোল ডেমারসে", state: "কঠিন", density: "5.244 g/cm³", melt: "822°C", boil: "1597°C" },
    { number: 64, symbol: "Gd", name: "গ্যাডোলিনিয়াম", latin: "Gadolinium", category: "lanthanide", mass: "157.25", electrons: "2,8,18,25,9,2", valence: "3", discovery: "1880", discoverer: "জিন চার্লস গ্যালিসার্ড ডি মারিগন্যাক", state: "কঠিন", density: "7.90 g/cm³", melt: "1312°C", boil: "3273°C" },
    { number: 65, symbol: "Tb", name: "টার্বিয়াম", latin: "Terbium", category: "lanthanide", mass: "158.93", electrons: "2,8,18,27,8,2", valence: "3", discovery: "1843", discoverer: "কার্ল গুস্তাফ মোসান্ডার", state: "কঠিন", density: "8.23 g/cm³", melt: "1356°C", boil: "3230°C" },
    { number: 66, symbol: "Dy", name: "ডিসপ্রোসিয়াম", latin: "Dysprosium", category: "lanthanide", mass: "162.50", electrons: "2,8,18,28,8,2", valence: "3", discovery: "1886", discoverer: "পল এমিল লেকক ডি বোইসবাউড্রান", state: "কঠিন", density: "8.540 g/cm³", melt: "1407°C", boil: "2567°C" },
    { number: 67, symbol: "Ho", name: "হোলমিয়াম", latin: "Holmium", category: "lanthanide", mass: "164.93", electrons: "2,8,18,29,8,2", valence: "3", discovery: "1878", discoverer: "মার্ক ডেলাফন্টেইন", state: "কঠিন", density: "8.79 g/cm³", melt: "1461°C", boil: "2720°C" },
    { number: 68, symbol: "Er", name: "এরবিয়াম", latin: "Erbium", category: "lanthanide", mass: "167.26", electrons: "2,8,18,30,8,2", valence: "3", discovery: "1843", discoverer: "কার্ল গুস্তাফ মোসান্ডার", state: "কঠিন", density: "9.066 g/cm³", melt: "1529°C", boil: "2868°C" },
    { number: 69, symbol: "Tm", name: "থুলিয়াম", latin: "Thulium", category: "lanthanide", mass: "168.93", electrons: "2,8,18,31,8,2", valence: "3", discovery: "1879", discoverer: "পের টিওডর ক্লিভ", state: "কঠিন", density: "9.32 g/cm³", melt: "1545°C", boil: "1950°C" },
    { number: 70, symbol: "Yb", name: "ইটারবিয়াম", latin: "Ytterbium", category: "lanthanide", mass: "173.05", electrons: "2,8,18,32,8,2", valence: "3", discovery: "1878", discoverer: "জিন চার্লস গ্যালিসার্ড ডি মারিগন্যাক", state: "কঠিন", density: "6.90 g/cm³", melt: "824°C", boil: "1196°C" },
    { number: 71, symbol: "Lu", name: "লুটেটিয়াম", latin: "Lutetium", category: "lanthanide", mass: "174.97", electrons: "2,8,18,32,9,2", valence: "3", discovery: "1907", discoverer: "জর্জেস আরবেইন ও কার্ল আউয়ার ভন ওয়েলসবাচ", state: "কঠিন", density: "9.841 g/cm³", melt: "1652°C", boil: "3402°C" },
    { number: 72, symbol: "Hf", name: "হাফনিয়াম", latin: "Hafnium", category: "transition", mass: "178.49", electrons: "2,8,18,32,10,2", valence: "4", discovery: "1923", discoverer: "ডার্ক কোস্টার ও জর্জেস ডি হেভেসি", state: "কঠিন", density: "13.31 g/cm³", melt: "2233°C", boil: "4603°C" },
    { number: 73, symbol: "Ta", name: "ট্যান্টালাম", latin: "Tantalum", category: "transition", mass: "180.95", electrons: "2,8,18,32,11,2", valence: "5", discovery: "1802", discoverer: "আন্ডার্স গুস্তাফ একেবার্গ", state: "কঠিন", density: "16.654 g/cm³", melt: "3017°C", boil: "5458°C" },
    { number: 74, symbol: "W", name: "টাংস্টেন", latin: "Wolframium", category: "transition", mass: "183.84", electrons: "2,8,18,32,12,2", valence: "6", discovery: "1783", discoverer: "জোসে ও ফাউস্টো এলহুইয়ার", state: "কঠিন", density: "19.25 g/cm³", melt: "3422°C", boil: "5555°C" },
    { number: 75, symbol: "Re", name: "রেনিয়াম", latin: "Rhenium", category: "transition", mass: "186.21", electrons: "2,8,18,32,13,2", valence: "7", discovery: "1925", discoverer: "ওয়াল্টার নডড্যাক, আইডা ট্যাকি ও অটো বার্গ", state: "কঠিন", density: "21.02 g/cm³", melt: "3186°C", boil: "5596°C" },
    { number: 76, symbol: "Os", name: "অসমিয়াম", latin: "Osmium", category: "transition", mass: "190.23", electrons: "2,8,18,32,14,2", valence: "4", discovery: "1803", discoverer: "স্মিথসন টেনান্ট", state: "কঠিন", density: "22.59 g/cm³", melt: "3033°C", boil: "5012°C" },
    { number: 77, symbol: "Ir", name: "ইরিডিয়াম", latin: "Iridium", category: "transition", mass: "192.22", electrons: "2,8,18,32,15,2", valence: "4", discovery: "1803", discoverer: "স্মিথসন টেনান্ট", state: "কঠিন", density: "22.56 g/cm³", melt: "2446°C", boil: "4428°C" },
    { number: 78, symbol: "Pt", name: "প্লাটিনাম", latin: "Platinum", category: "transition", mass: "195.08", electrons: "2,8,18,32,17,1", valence: "2,4", discovery: "1735", discoverer: "অ্যান্টোনিও ডি উলোয়া", state: "কঠিন", density: "21.45 g/cm³", melt: "1768.3°C", boil: "3825°C" },
    { number: 79, symbol: "Au", name: "সোনা", latin: "Aurum", category: "transition", mass: "196.97", electrons: "2,8,18,32,18,1", valence: "1,3", discovery: "প্রাচীনকাল", discoverer: "অজানা", state: "কঠিন", density: "19.3 g/cm³", melt: "1064.18°C", boil: "2856°C" },
    { number: 80, symbol: "Hg", name: "পারদ", latin: "Hydrargyrum", category: "transition", mass: "200.59", electrons: "2,8,18,32,18,2", valence: "1,2", discovery: "প্রাচীনকাল", discoverer: "অজানা", state: "তরল", density: "13.534 g/cm³", melt: "-38.83°C", boil: "356.73°C" },
    { number: 81, symbol: "Tl", name: "থ্যালিয়াম", latin: "Thallium", category: "post-transition", mass: "204.38", electrons: "2,8,18,32,18,3", valence: "1,3", discovery: "1861", discoverer: "উইলিয়াম ক্রুকস", state: "কঠিন", density: "11.85 g/cm³", melt: "304°C", boil: "1473°C" },
    { number: 82, symbol: "Pb", name: "সীসা", latin: "Plumbum", category: "post-transition", mass: "207.2", electrons: "2,8,18,32,18,4", valence: "2,4", discovery: "প্রাচীনকাল", discoverer: "অজানা", state: "কঠিন", density: "11.34 g/cm³", melt: "327.46°C", boil: "1749°C" },
    { number: 83, symbol: "Bi", name: "বিসমাথ", latin: "Bismuthum", category: "post-transition", mass: "208.98", electrons: "2,8,18,32,18,5", valence: "3,5", discovery: "প্রাচীনকাল", discoverer: "অজানা", state: "কঠিন", density: "9.78 g/cm³", melt: "271.5°C", boil: "1564°C" },
    { number: 84, symbol: "Po", name: "পোলোনিয়াম", latin: "Polonium", category: "post-transition", mass: "(209)", electrons: "2,8,18,32,18,6", valence: "2,4", discovery: "1898", discoverer: "পিয়েরে ও মারি কুরি", state: "কঠিন", density: "9.196 g/cm³", melt: "254°C", boil: "962°C" },
    { number: 85, symbol: "At", name: "অ্যাস্টাটিন", latin: "Astatium", category: "halogen", mass: "(210)", electrons: "2,8,18,32,18,7", valence: "1", discovery: "1940", discoverer: "ডেল আর. করসন, কেনেথ রস ম্যাকেঞ্জি ও এমিলিও সেগরে", state: "কঠিন", density: "7 g/cm³", melt: "302°C", boil: "337°C" },
    { number: 86, symbol: "Rn", name: "রেডন", latin: "Radon", category: "noble-gas", mass: "(222)", electrons: "2,8,18,32,18,8", valence: "0", discovery: "1900", discoverer: "ফ্রেডরিখ আর্নেস্ট ডর্ন", state: "গ্যাস", density: "0.00973 g/cm³", melt: "-71°C", boil: "-61.7°C" },
    { number: 87, symbol: "Fr", name: "ফ্রান্সিয়াম", latin: "Francium", category: "alkali", mass: "(223)", electrons: "2,8,18,32,18,8,1", valence: "1", discovery: "1939", discoverer: "মার্গারিট পেরে", state: "কঠিন", density: "2.48 g/cm³", melt: "27°C", boil: "677°C" },
    { number: 88, symbol: "Ra", name: "রেডিয়াম", latin: "Radium", category: "alkaline-earth", mass: "(226)", electrons: "2,8,18,32,18,8,2", valence: "2", discovery: "1898", discoverer: "পিয়েরে ও মারি কুরি", state: "কঠিন", density: "5.5 g/cm³", melt: "700°C", boil: "1737°C" },
    { number: 89, symbol: "Ac", name: "অ্যাক্টিনিয়াম", latin: "Actinium", category: "actinide", mass: "(227)", electrons: "2,8,18,32,18,9,2", valence: "3", discovery: "1899", discoverer: "আন্দ্রে-লুই ডেবিয়ার্ন", state: "কঠিন", density: "10.07 g/cm³", melt: "1050°C", boil: "3200°C" },
    { number: 90, symbol: "Th", name: "থোরিয়াম", latin: "Thorium", category: "actinide", mass: "232.04", electrons: "2,8,18,32,18,10,2", valence: "4", discovery: "1829", discoverer: "জন্স জ্যাকব বার্জেলিয়াস", state: "কঠিন", density: "11.72 g/cm³", melt: "1750°C", boil: "4788°C" },
    { number: 91, symbol: "Pa", name: "প্রোটেক্টিনিয়াম", latin: "Protactinium", category: "actinide", mass: "231.036", electrons: "2,8,18,32,20,9,2", valence: "5", discovery: "1913", discoverer: "কাজিমিয়েজ ফাজানস ও অসওয়াল্ড হেলমুট গোয়েরিং", state: "কঠিন", density: "15.37 g/cm³", melt: "1568°C", boil: "4027°C" },
    { number: 92, symbol: "U", name: "ইউরেনিয়াম", latin: "Uranium", category: "actinide", mass: "238.029", electrons: "2,8,18,32,21,9,2", valence: "6", discovery: "1789", discoverer: "মার্টিন হাইনরিখ ক্লাপ্রোথ", state: "কঠিন", density: "19.1 g/cm³", melt: "1132.2°C", boil: "4131°C" },
    { number: 93, symbol: "Np", name: "নেপচুনিয়াম", latin: "Neptunium", category: "actinide", mass: "237", electrons: "2,8,18,32,22,9,2", valence: "5", discovery: "1940", discoverer: "এডউইন ম্যাকমিলান ও ফিলিপ এইচ. অ্যাবেলসন", state: "কঠিন", density: "20.45 g/cm³", melt: "644°C", boil: "3902°C" },
    { number: 94, symbol: "Pu", name: "প্লুটোনিয়াম", latin: "Plutonium", category: "actinide", mass: "244", electrons: "2,8,18,32,24,8,2", valence: "6", discovery: "1940", discoverer: "গ্লেন টি. সিবোর্গ, এডউইন ম্যাকমিলান, জোসেফ ডব্লিউ. কেনেডি, আর্থার সি. ওয়াহ্ল", state: "কঠিন", density: "19.816 g/cm³", melt: "639.4°C", boil: "3228°C" },
    { number: 95, symbol: "Am", name: "আমেরিসিয়াম", latin: "Americium", category: "actinide", mass: "243", electrons: "2,8,18,32,25,8,2", valence: "3", discovery: "1944", discoverer: "গ্লেন টি. সিবোর্গ, রাল্ফ এ. জেমস, লিওন ও. মরগান, অ্যালবার্ট ঘিওরসো", state: "কঠিন", density: "12 g/cm³", melt: "1176°C", boil: "2607°C" },
    { number: 96, symbol: "Cm", name: "কিউরিয়াম", latin: "Curium", category: "actinide", mass: "247", electrons: "2,8,18,32,25,9,2", valence: "3", discovery: "1944", discoverer: "গ্লেন টি. সিবোর্গ, রাল্ফ এ. জেমস, অ্যালবার্ট ঘিওরসো", state: "কঠিন", density: "13.51 g/cm³", melt: "1340°C", boil: "3110°C" },
    { number: 97, symbol: "Bk", name: "বার্কেলিয়াম", latin: "Berkelium", category: "actinide", mass: "247", electrons: "2,8,18,32,27,8,2", valence: "3", discovery: "1949", discoverer: "গ্লেন টি. সিবোর্গ, স্ট্যানলি জি. থম্পসন, অ্যালবার্ট ঘিওরসো", state: "কঠিন", density: "14.78 g/cm³", melt: "986°C", boil: "2627°C" },
    { number: 98, symbol: "Cf", name: "ক্যালিফোর্নিয়াম", latin: "Californium", category: "actinide", mass: "251", electrons: "2,8,18,32,28,8,2", valence: "3", discovery: "1950", discoverer: "গ্লেন টি. সিবোর্গ, স্ট্যানলি জি. থম্পসন, কেনেথ স্ট্রিট জুনিয়র, অ্যালবার্ট ঘিওরসো", state: "কঠিন", density: "15.1 g/cm³", melt: "900°C", boil: "1470°C" },
    { number: 99, symbol: "Es", name: "আইনস্টাইনিয়াম", latin: "Einsteinium", category: "actinide", mass: "252", electrons: "2,8,18,32,29,8,2", valence: "3", discovery: "1952", discoverer: "আলবার্ট ঘিওরসো ও সহযোগীরা", state: "কঠিন", density: "8.84 g/cm³", melt: "860°C", boil: "996°C" },
    { number: 100, symbol: "Fm", name: "ফার্মিয়াম", latin: "Fermium", category: "actinide", mass: "257", electrons: "2,8,18,32,30,8,2", valence: "3", discovery: "1952", discoverer: "আলবার্ট ঘিওরসো ও সহযোগীরা", state: "কঠিন", density: "9.7 g/cm³ (অনুমান)", melt: "1527°C (অনুমান)", boil: "Unknown" },
    { number: 101, symbol: "Md", name: "মেন্ডেলিভিয়াম", latin: "Mendelevium", category: "actinide", mass: "258", electrons: "2,8,18,32,31,8,2", valence: "3", discovery: "1955", discoverer: "আলবার্ট ঘিওরসো, বার্নহার্ড হার্ভি, গ্রেগরি আর. চোপিন, স্ট্যানলি জি. থম্পসন, গ্লেন টি. সিবোর্গ", state: "কঠিন", density: "10.3 g/cm³ (অনুমান)", melt: "827°C (অনুমান)", boil: "Unknown" },
    { number: 102, symbol: "No", name: "নোবেলিয়াম", latin: "Nobelium", category: "actinide", mass: "259", electrons: "2,8,18,32,32,8,2", valence: "2", discovery: "1958", discoverer: "আলবার্ট ঘিওরসো, গ্লেন টি. সিবোর্গ, জন আর. ওয়ালটন, টরবিয়র্ন সিকেল্যান্ড", state: "কঠিন", density: "9.9 g/cm³ (অনুমান)", melt: "827°C (অনুমান)", boil: "Unknown" },
    { number: 103, symbol: "Lr", name: "লরেনসিয়াম", latin: "Lawrencium", category: "actinide", mass: "266", electrons: "2,8,18,32,32,8,3", valence: "3", discovery: "1961", discoverer: "আলবার্ট ঘিওরসো, টরবিয়র্ন সিকেল্যান্ড, রবার্ট এম. ল্যাটিমার", state: "কঠিন", density: "15.6 g/cm³ (অনুমান)", melt: "1627°C (অনুমান)", boil: "Unknown" },
    { number: 104, symbol: "Rf", name: "রাদারফোর্ডিয়াম", latin: "Rutherfordium", category: "transition", mass: "267", electrons: "2,8,18,32,32,10,2", valence: "4", discovery: "1964", discoverer: "জয়েন্ট ইনস্টিটিউট ফর নিউক্লিয়ার রিসার্চ", state: "কঠিন (অনুমান)", density: "23.2 g/cm³ (অনুমান)", melt: "2100°C (অনুমান)", boil: "5500°C (অনুমান)" },
    { number: 105, symbol: "Db", name: "ডুবনিয়াম", latin: "Dubnium", category: "transition", mass: "268", electrons: "2,8,18,32,32,11,2", valence: "5", discovery: "1967", discoverer: "জয়েন্ট ইনস্টিটিউট ফর নিউক্লিয়ার রিসার্চ", state: "কঠিন (অনুমান)", density: "29.3 g/cm³ (অনুমান)", melt: "Unknown", boil: "Unknown" },
    { number: 106, symbol: "Sg", name: "সিবোর্গিয়াম", latin: "Seaborgium", category: "transition", mass: "269", electrons: "2,8,18,32,32,12,2", valence: "6", discovery: "1974", discoverer: "জয়েন্ট ইনস্টিটিউট ফর নিউক্লিয়ার রিসার্চ", state: "কঠিন (অনুমান)", density: "35.0 g/cm³ (অনুমান)", melt: "Unknown", boil: "Unknown" },
    { number: 107, symbol: "Bh", name: "বোহ্রিয়াম", latin: "Bohrium", category: "transition", mass: "270", electrons: "2,8,18,32,32,13,2", valence: "7", discovery: "1981", discoverer: "জিএসআই হেল্মহোল্টজ সেন্টার ফর হেভি আয়ন রিসার্চ", state: "কঠিন (অনুমান)", density: "37.1 g/cm³ (অনুমান)", melt: "Unknown", boil: "Unknown" },
    { number: 108, symbol: "Hs", name: "হ্যাসিয়াম", latin: "Hassium", category: "transition", mass: "269", electrons: "2,8,18,32,32,14,2", valence: "8", discovery: "1984", discoverer: "জিএসআই হেল্মহোল্টজ সেন্টার ফর হেভি আয়ন রিসার্চ", state: "কঠিন (অনুমান)", density: "40.7 g/cm³ (অনুমান)", melt: "Unknown", boil: "Unknown" },
    { number: 109, symbol: "Mt", name: "মিটনেরিয়াম", latin: "Meitnerium", category: "unknown", mass: "278", electrons: "2,8,18,32,32,15,2", valence: "Unknown", discovery: "1982", discoverer: "জিএসআই হেল্মহোল্টজ সেন্টার ফর হেভি আয়ন রিসার্চ", state: "কঠিন (অনুমান)", density: "37.4 g/cm³ (অনুমান)", melt: "Unknown", boil: "Unknown" },
    { number: 110, symbol: "Ds", name: "ডার্মস্টাডিয়াম", latin: "Darmstadtium", category: "unknown", mass: "281", electrons: "2,8,18,32,32,17,1", valence: "Unknown", discovery: "1994", discoverer: "জিএসআই হেল্মহোল্টজ সেন্টার ফর হেভি আয়ন রিসার্চ", state: "কঠিন (অনুমান)", density: "34.8 g/cm³ (অনুমান)", melt: "Unknown", boil: "Unknown" },
    { number: 111, symbol: "Rg", name: "রন্টজেনিয়াম", latin: "Roentgenium", category: "unknown", mass: "282", electrons: "2,8,18,32,32,18,1", valence: "Unknown", discovery: "1994", discoverer: "জিএসআই হেল্মহোল্টজ সেন্টার ফর হেভি আয়ন রিসার্চ", state: "কঠিন (অনুমান)", density: "28.7 g/cm³ (অনুমান)", melt: "Unknown", boil: "Unknown" },
    { number: 112, symbol: "Cn", name: "কোপারনিসিয়াম", latin: "Copernicium", category: "unknown", mass: "285", electrons: "2,8,18,32,32,18,2", valence: "2", discovery: "1996", discoverer: "জিএসআই হেল্মহোল্টজ সেন্টার ফর হেভি আয়ন রিসার্চ", state: "গ্যাস (অনুমান)", density: "23.7 g/cm³ (অনুমান)", melt: "Unknown", boil: "Unknown" },
    { number: 113, symbol: "Nh", name: "নিহোনিয়াম", latin: "Nihonium", category: "unknown", mass: "286", electrons: "2,8,18,32,32,18,3", valence: "Unknown", discovery: "2003", discoverer: "জয়েন্ট ইনস্টিটিউট ফর নিউক্লিয়ার রিসার্চ", state: "কঠিন (অনুমান)", density: "16 g/cm³ (অনুমান)", melt: "Unknown", boil: "Unknown" },
    { number: 114, symbol: "Fl", name: "ফ্লেরোভিয়াম", latin: "Flerovium", category: "unknown", mass: "289", electrons: "2,8,18,32,32,18,4", valence: "Unknown", discovery: "1998", discoverer: "জয়েন্ট ইনস্টিটিউট ফর নিউক্লিয়ার রিসার্চ", state: "গ্যাস (অনুমান)", density: "14 g/cm³ (অনুমান)", melt: "Unknown", boil: "Unknown" },
    { number: 115, symbol: "Mc", name: "মস্কোভিয়াম", latin: "Moscovium", category: "unknown", mass: "290", electrons: "2,8,18,32,32,18,5", valence: "Unknown", discovery: "2003", discoverer: "জয়েন্ট ইনস্টিটিউট ফর নিউক্লিয়ার রিসার্চ", state: "কঠিন (অনুমান)", density: "13.5 g/cm³ (অনুমান)", melt: "Unknown", boil: "Unknown" },
    { number: 116, symbol: "Lv", name: "লিভারমোরিয়াম", latin: "Livermorium", category: "unknown", mass: "293", electrons: "2,8,18,32,32,18,6", valence: "Unknown", discovery: "2000", discoverer: "জয়েন্ট ইনস্টিটিউট ফর নিউক্লিয়ার রিসার্চ", state: "কঠিন (অনুমান)", density: "12.9 g/cm³ (অনুমান)", melt: "Unknown", boil: "Unknown" },
    { number: 117, symbol: "Ts", name: "টেনিসাইন", latin: "Tennessine", category: "unknown", mass: "294", electrons: "2,8,18,32,32,18,7", valence: "Unknown", discovery: "2010", discoverer: "জয়েন্ট ইনস্টিটিউট ফর নিউক্লিয়ার রিসার্চ ও ওক রিজ ন্যাশনাল ল্যাবরেটরি", state: "কঠিন (অনুমান)", density: "7.1–7.3 g/cm³ (অনুমান)", melt: "350–550°C (অনুমান)", boil: "610°C (অনুমান)" },
            { number: 118, symbol: "Og", name: "ওগানেসন", latin: "Oganesson", category: "unknown", mass: "(294)", electrons: "2,8,18,32,32,18,8", valence: "0", discovery: "2002", discoverer: "Joint Institute for Nuclear Research", state: "গ্যাস (অনুমান)", density: "4.9–5.1 g/cm³ (অনুমান)", melt: "50–100°C (অনুমান)", boil: "80–120°C (অনুমান)" }
        ];

        // Periodic table layout with atomic numbers
        const periodicTableLayout = [
            [1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 2],
            [3, 4, null, null, null, null, null, null, null, null, null, null, 5, 6, 7, 8, 9, 10],
            [11, 12, null, null, null, null, null, null, null, null, null, null, 13, 14, 15, 16, 17, 18],
            [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
            [37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54],
            [55, 56, 57, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86],
            [87, 88, 89, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118],
            [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
            [null, null, null, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, null],
            [null, null, null, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, null]
        ];

        // Display periodic table
        const periodicTable = document.getElementById('periodic-table');
        
        periodicTableLayout.forEach(row => {
            row.forEach(cell => {
                const cellDiv = document.createElement('div');
                cellDiv.className = 'element';
                
                if (cell) {
                    const element = elements.find(el => el.number === cell);
                    if (element) {
                        cellDiv.classList.add(element.category);
                        cellDiv.innerHTML = `
                            <div class="number">${element.number}</div>
                            <div class="symbol">${element.symbol}</div>
                            <div class="name">${element.name}</div>
                        `;
                        cellDiv.addEventListener('click', () => showElementDetails(element));
                    }
                } else {
                    cellDiv.style.visibility = 'hidden';
                }
                
                periodicTable.appendChild(cellDiv);
            });
        });

        // Show element details
        function showElementDetails(element) {
            const details = document.getElementById('element-details');
            const symbol = document.getElementById('detail-symbol');
            const name = document.getElementById('detail-name');
            const number = document.getElementById('detail-number');
            const properties = document.getElementById('detail-properties');
            
            // Set basic info
            symbol.textContent = element.symbol;
            name.textContent = element.name;
            number.textContent = element.number;
            
            // Set properties
            properties.innerHTML = `
                <div class="property">
                    <div class="property-title">পরমাণবিক সংখ্যা</div>
                    <div>${element.number}</div>
                </div>
                <div class="property">
                    <div class="property-title">প্রতীক</div>
                    <div>${element.symbol}</div>
                </div>
                <div class="property">
                    <div class="property-title">ল্যাটিন নাম</div>
                    <div>${element.latin}</div>
                </div>
                <div class="property">
                    <div class="property-title">পরমাণবিক ভর</div>
                    <div>${element.mass}</div>
                </div>
                <div class="property">
                    <div class="property-title">শ্রেণী</div>
                    <div>${getCategoryName(element.category)}</div>
                </div>
                <div class="property">
                    <div class="property-title">ইলেকট্রন বিন্যাস</div>
                    <div>${element.electrons}</div>
                </div>
                <div class="property">
                    <div class="property-title">যোজ্যতা</div>
                    <div>${element.valence}</div>
                </div>
                <div class="property">
                    <div class="property-title">আবিষ্কারের বছর</div>
                    <div>${element.discovery}</div>
                </div>
                <div class="property">
                    <div class="property-title">আবিষ্কারক</div>
                    <div>${element.discoverer}</div>
                </div>
                <div class="property">
                    <div class="property-title">প্রকৃতি</div>
                    <div>${element.state}</div>
                </div>
                <div class="property">
                    <div class="property-title">ঘনত্ব</div>
                    <div>${element.density}</div>
                </div>
                <div class="property">
                    <div class="property-title">গলনাঙ্ক</div>
                    <div>${element.melt}</div>
                </div>
                <div class="property">
                    <div class="property-title">স্ফুটনাঙ্ক</div>
                    <div>${element.boil}</div>
                </div>
            `;
            
            // Show details
            details.classList.add('active');
            
            // Scroll to details
            details.scrollIntoView({ behavior: 'smooth' });
        }

        // Get Bengali category name
        function getCategoryName(category) {
            const categories = {
                'alkali': 'ক্ষার ধাতু',
                'alkaline-earth': 'ক্ষারীয় মৃত্তিকা ধাতু',
                'transition': 'সংক্রমণ ধাতু',
                'post-transition': 'উত্তর-সংক্রমণ ধাতু',
                'metalloid': 'ধাতুকল্প',
                'nonmetal': 'অধাতু',
                'halogen': 'হ্যালোজেন',
                'noble-gas': 'নিষ্ক্রিয় গ্যাস',
                'lanthanide': 'ল্যান্থানাইড',
                'actinide': 'অ্যাক্টিনাইড',
                'unknown': 'অজানা'
            };
            return categories[category] || category;
        }

        // Search functionality
        const searchInput = document.getElementById('element-search');
        
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            
            if (searchTerm.length >= 2) {
                const found = elements.find(el => 
                    el.name.toLowerCase().includes(searchTerm) || 
                    el.symbol.toLowerCase().includes(searchTerm) ||
                    el.number.toString().includes(searchTerm) ||
                    el.latin.toLowerCase().includes(searchTerm)
                );
                
                if (found) {
                    showElementDetails(found);
                }
            }
        });
    