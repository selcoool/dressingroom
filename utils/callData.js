
const jsonFilePath = '../data/Data.json';
       
const fetchData =() => {
   return fetch(jsonFilePath)
    .then(response => {
        // Kiểm tra xem có lỗi không
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        // Trả về promise chứa dữ liệu JSON
        return response.json();
    })
    .then(data => {
          return data;

    })
    .catch(error => {
        // Xử lý lỗi nếu có
        console.error('Error fetching data:', error);
    });
// Sử dụng try...catch để xử lý lỗi
// try {
//     // Gửi yêu cầu GET đến API bằng fetch
//     const response = await fetch(fetchData);
  
//     // Kiểm tra xem yêu cầu có thành công không (status code 200)
//     if (!response.ok) {
//       throw new Error(`Network response was not ok: ${response.status}`);
//     }
  
//     // // Chuyển đổi dữ liệu từ JSON
//     // const data = await response.json();
  
//     // // Xử lý dữ liệu đã nhận được ở đây
//     // console.log("data",data);
//   } catch (error) {
//     // Xử lý lỗi nếu có bất kỳ vấn đề nào xảy ra
//     console.error('Fetch error:', error);
//   }


};

// module.exports = fetchData;
