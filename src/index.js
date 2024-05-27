
document.getElementById('show-distance').addEventListener('click', function() {
    var start = document.getElementById('start-location').value;
    var end = document.getElementById('end-location').value;
    var cuCoordinates = { lat: 31.0104, lon: 76.4573 };

    var locationCoordinates = {
        'Andhra Pradesh': { lat: 15.9129, lon: 79.7400 },
        'Arunachal Pradesh': { lat: 27.1004, lon: 93.6167 },
        'Assam': { lat: 26.2006, lon: 92.9376 },
        'Bihar': { lat: 25.0961, lon: 85.3131 },
        'Chhattisgarh': { lat: 21.2787, lon: 81.8661 },
        'Goa': { lat: 15.2993, lon: 74.1240 },
        'Gujarat': { lat: 22.2587, lon: 71.1924 },
        'Haryana': { lat: 29.0588, lon: 76.0856 },
        'Himachal Pradesh': { lat: 31.1048, lon: 77.1734 },
        'Jharkhand': { lat: 23.6102, lon: 85.2799 },
        'Karnataka': { lat: 15.3173, lon: 75.7139 },
        'Kerala': { lat: 10.8505, lon: 76.2711 },
        'Madhya Pradesh': { lat: 22.9734, lon: 78.6569 },
        'Maharashtra': { lat: 19.7515, lon: 75.7139 },
        'Manipur': { lat: 24.6637, lon: 93.9063 },
        'Meghalaya': { lat: 25.4670, lon: 91.3662 },
        'Mizoram': { lat: 23.1645, lon: 92.9376 },
        'Nagaland': { lat: 26.1584, lon: 94.5624 },
        'Odisha': { lat: 20.9517, lon: 85.0985 },
        'Punjab': { lat: 31.1471, lon: 75.3412 },
        'Rajasthan': { lat: 27.0238, lon: 74.2179 },
        'Sikkim': { lat: 27.5330, lon: 88.5122 },
        'Tamil Nadu': { lat: 11.1271, lon: 78.6569 },
        'Telangana': { lat: 18.1124, lon: 79.0193 },
        'Tripura': { lat: 23.9408, lon: 91.9882 },
        'Uttar Pradesh': { lat: 26.8467, lon: 80.9462 },
        'Uttarakhand': { lat: 30.0668, lon: 79.0193 },
        'West Bengal': { lat: 22.9868, lon: 87.8550 },
        'Ambala': { lat: 30.3753, lon: 76.7821 },
        'Yamunanagar': { lat: 30.129, lon: 77.2804 },
        'Hisar': { lat: 29.1539, lon: 75.7229 },
        'Rohtak': { lat: 28.8955, lon: 76.6066 },
        'Karnal': { lat: 29.6857, lon: 76.9905 },
        'Panipat': { lat: 29.3919, lon: 76.9695 },
        'Sonipat': { lat: 28.9288, lon: 77.0918 },
        'Panchkula': { lat: 30.6942, lon: 76.8606 },
        'Bhiwani': { lat: 28.793, lon: 76.1397 },
        'Sirsa': { lat: 29.5854, lon: 75.0078 },
        'Jind': { lat: 29.3157, lon: 76.3253 },
        'Thanesar': { lat: 29.9738, lon: 76.8329 },
        'Kaithal': { lat: 29.8014, lon: 76.3962 },
        'Rewari': { lat: 28.199, lon: 76.6189 },
        'Palwal': { lat: 28.1487, lon: 77.328 },
        'Hansi': { lat: 29.1012, lon: 75.9627 },
        'Narnaul': { lat: 28.0445, lon: 76.1084 },
        'Fatehabad': { lat: 29.5135, lon: 75.4557 },
        'Gohana': { lat: 29.1352, lon: 76.6976 },
        'Tohana': { lat: 29.7008, lon: 75.8975 },
        'Narwana': { lat: 29.5945, lon: 76.1215 },
        'Ferozepur Jhirka': { lat: 27.7881, lon: 76.9491 },
        'Charkhi Dadri': { lat: 28.5886, lon: 76.2711 },
        'Tosham': { lat: 27.9435, lon: 75.9164 },
        'Ratia': { lat: 29.6825, lon: 75.9748 },
        'Pinjore': { lat: 30.7993, lon: 76.9175 },
        'Shahabad': { lat: 30.1789, lon: 76.8497 },
        'Bawal': { lat: 28.0727, lon: 76.5874 },
        'Jagadhri': { lat: 30.1738, lon: 77.2998 },
        'Pehowa': { lat: 29.9735, lon: 76.5814 },
        'Mahendragarh': { lat: 28.2738, lon: 76.1503 },
        'Rania': { lat: 29.5174, lon: 75.837 },
        'Naraingarh': { lat: 30.4915, lon: 77.132 },
      'Ladwa': { lat: 29.9914, lon: 77.047 },
        'Kosli': { lat: 28.3907, lon: 76.3733 },
        'Gharaunda': { lat: 29.559, lon: 76.9693 },
        'Shahbad': { lat: 30.05, lon: 76.9 },
        'Pundri': { lat: 29.6765, lon: 76.04 },
        'Dohad': { lat: 28.8088, lon: 76.1925 },
        'Uklana': { lat: 29.7068, lon: 75.6584 }, 
        'Shimla': { lat: 31.1048, lon: 77.1734 },
        'Mandi': { lat: 31.7796, lon: 76.9869 },
        'Solan': { lat: 30.9066, lon: 77.0976 },
        'Nahan': { lat: 30.5485, lon: 77.3019 },
        'Una': { lat: 31.4682, lon: 76.263 },
        'Kullu': { lat: 31.9819, lon: 77.1095 },
        'Palampur': { lat: 32.1163, lon: 76.5356 },
        'Dharamshala': { lat: 32.219, lon: 76.3203 },
        'Sundarnagar': { lat: 31.5317, lon: 76.9135 },
        'Chamba': { lat: 32.5553, lon: 76.1253 },
        'Bilaspur': { lat: 31.3822, lon: 76.2946 },
        'Kangra': { lat: 32.102, lon: 76.2691 },
        'Hamirpur': { lat: 31.6849, lon: 76.5231 },
        'Kasauli': { lat: 30.8997, lon: 76.9654 },
        'Mehatpur Basdehra': { lat: 31.6929, lon: 76.5486 },
        'Jawalamukhi': { lat: 31.8707, lon: 76.3214 },
        'Nagrota Bagwan': { lat: 32.06, lon: 76.95 },
        'Baddi': { lat: 30.9578, lon: 76.7897 },
        'Nalagarh': { lat: 31.0314, lon: 76.9264 },
        'Kalka': { lat: 30.8415, lon: 76.9397 },
        'Manali': { lat: 32.2396, lon: 77.1887 },
        'Arki': { lat: 31.1462, lon: 76.9664 },
        'Rampur Bushahr': { lat: 31.4333, lon: 77.6242 },
        'Nurpur': { lat: 32.037, lon: 75.8996 },
        'Naina Devi': { lat: 31.41, lon: 76.4325 },
        'Santokhgarh': { lat: 31.6223, lon: 76.3744 },
        'Narkanda': { lat: 31.277, lon: 77.444 },
        'Sarkaghat': { lat: 31.7067, lon: 76.9495 },
        'Rohru': { lat: 31.219, lon: 77.6965 },
        'Tira Sujanpur': { lat: 31.9073, lon: 76.7457 },
        'Ghumarwin': { lat: 31.3796, lon: 76.6114 },
        'Rajgarh': { lat: 30.8216, lon: 77.2924 },
        'Renuka': { lat: 30.6804, lon: 77.295 },
        'Jogindernagar': { lat: 31.9872, lon: 76.775 },
        'Nadaun': { lat: 31.7987, lon: 76.3224 },
        'Baijnath': { lat: 32.0457, lon: 76.7048 },
        'Theog': { lat: 31.1167, lon: 77.3833 },
        'Banjar': { lat: 31.6119, lon: 77.1269 },
        'Sujanpur': { lat: 31.9475, lon: 76.7222 },
        'Kumarsain': { lat: 31.1058, lon: 77.1361 },
        'Bangana': { lat: 31.456, lon: 76.3025 },
        'Nagrota': { lat: 32.1462, lon: 76.7136 },
        'Nadaun Tehsil': { lat: 31.814, lon: 76.3199 },
        'Rajgarh Tehsil': { lat: 30.8131, lon: 77.2731 },
        'Sarkaghat Tehsil': { lat: 31.6621, lon: 76.9812 },
        'Churah Tehsil': { lat: 32.3534, lon: 76.0057 },
        'Sundernagar Tehsil': { lat: 31.5282, lon: 76.8764 },
        'Rampur Bushahr Tehsil': { lat: 31.4316, lon: 77.6247 },
        'Amb Tehsil': { lat: 31.7624, lon: 76.3203 },
        'Ghumarwin Tehsil': { lat: 31.3953, lon: 76.6068 },
        'Karsog Tehsil': { lat: 31.3613, lon: 77.1965 },
        'Nurpur Tehsil': { lat: 32.0721, lon: 75.8964 },
        'Bharmour Tehsil': { lat: 32.4138, lon: 76.4712 },
    }; 

    var startCoordinates = locationCoordinates[start];
    var endCoordinates = cuCoordinates;

    var distance = calculateDistance(startCoordinates, endCoordinates);
    alert('Distance between ' + start + ' and Chandigarh University is ' + distance.toFixed(2) + ' km');
});


function calculateDistance(start, end) {
    var R = 6371; 
    var dLat = (end.lat - start.lat) *

 Math.PI / 180;
    var dLon = (end.lon - start.lon) * Math.PI / 180;
    var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(start.lat * Math.PI / 180) * Math.cos(end.lat * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d;
}
