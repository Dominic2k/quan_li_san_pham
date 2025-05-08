Hướng dẫn cài đặt project
Yêu cầu : cài môi trường React Developer Tool, Json Viewer trong trình duyệt.
	 folder node modules để deploy server

Thực hiện:
	b1: tiến hành git clone project từ github
	b2: copy thư mục node modules từ máy của bạn vào project
	b3: vào thư mục server -> callApi chạy cmd trên thư mục bằng lệnh
			json-server --watch db.json
	*lưu ý: đừng tắt cửa sổ cmd trong quá trình chạy bài
	b4: vào ra ngoài cùng thư mục chạy cmd bằng lệnh :
			npm start
	*lưu ý : nếu cửa sổ yêu cầu đổi cổng vì đã có ứng dụng chạy trên cổng mặc định 3000 
		, hãy bấm Y để đổi cổng và đợi server khởi động
	b5: nếu node modules của bạn chưa có các thư viện cần thiết để chạy bài như react-router-dom, axios, toastify, react-script..
	    thì bạn hãy chạy lệnh npm install + tên thư viện cần cài cho project, sau dó chạy lệnh npm start để chạy chương trình bình thường