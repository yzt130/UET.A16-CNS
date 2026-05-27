export interface Project {
	id: string;
	title: string;
	tag: string;
	goal: string;
	summary: string;
	fileUrl: string;
	fileName: string;
}

export const projects: Project[] = [
	{
		id: 'ex1-week1',
		title: 'Thao tác cơ bản với tệp tin và thư mục',
		tag: 'Bài 1 (Mục 1.4)',
		goal: 'Rèn luyện kỹ năng tạo, đổi tên, sao chép, di chuyển và xóa tệp tin, thư mục trên hệ điều hành Windows.',
		summary:
			'Thực hiện 12 bước thao tác cơ bản với File Explorer. Bao gồm việc tạo thư mục cá nhân, tạo và đổi tên tệp văn bản, quản lý cấu trúc tài liệu bằng cách sao chép và di chuyển tệp, và cuối cùng là thao tác xóa vĩnh viễn và khôi phục từ Thùng rác (Recycle Bin).',
		fileUrl: '/assets/exercises/Ex1_Week1_Sol.docx',
		fileName: 'Ex1_Week1_Sol.docx'
	},
	{
		id: 'ex2-week2',
		title: 'Tìm kiếm và đánh giá thông tin học thuật',
		tag: 'Bài 2 (Mục 2.4)',
		goal: 'Phát triển kỹ năng tìm kiếm và đánh giá thông tin học thuật từ các nguồn đáng tin cậy.',
		summary:
			'Chọn chủ đề "Tác động của trí tuệ nhân tạo (AI) trong giáo dục". Tìm kiếm và tổng hợp 10 tài liệu tham khảo (bao gồm ít nhất 5 bài báo khoa học) từ Google Scholar, tạp chí khoa học và sách. Đánh giá độ tin cậy dựa trên tác giả, cơ quan xuất bản, phương pháp nghiên cứu, và tính cập nhật.',
		fileUrl: '/assets/exercises/Ex2_Week2_Sol.docx',
		fileName: 'Ex2_Week2_Sol.docx'
	},
	{
		id: 'ex2-week3',
		title: 'Viết Prompt hiệu quả cho các tác vụ học tập',
		tag: 'Bài 3 (Mục 3.4)',
		goal: 'Phát triển kỹ năng viết prompt hiệu quả để tận dụng tối đa các mô hình ngôn ngữ lớn (LLM) trong học tập.',
		summary:
			'Áp dụng vào 3 tác vụ: Tóm tắt tài liệu, giải thích khái niệm, và tạo câu hỏi ôn tập. Xây dựng 3 phiên bản prompt cho mỗi tác vụ (Cơ bản, Cải tiến, Nâng cao). Thử nghiệm, so sánh kết quả và rút ra các nguyên tắc cốt lõi khi viết prompt (đóng vai, cụ thể hóa, cấu trúc hóa yêu cầu).',
		fileUrl: '/assets/exercises/Ex2_Week3_Sol.docx',
		fileName: 'Ex2_Week3_Sol.docx'
	},
	{
		id: 'ex3-week4',
		title: 'Sử dụng công cụ hợp tác trực tuyến cho dự án nhóm',
		tag: 'Bài 4 (Mục 4.4)',
		goal: 'Làm chủ các công cụ hợp tác trực tuyến và thể hiện khả năng điều phối cá nhân trong dự án nhóm.',
		summary:
			'Sử dụng Trello để quản lý nhiệm vụ (Kanban board), Google Docs để cùng soạn thảo văn bản, và Discord để trao đổi thông tin. Theo dõi tiến độ trong 1 tuần, tổng hợp những khó khăn gặp phải trong quá trình làm việc nhóm và đề xuất các giải pháp khắc phục.',
		fileUrl: '/assets/exercises/Ex3_Week4_Sol.docx',
		fileName: 'Ex3_Week4_Sol.docx'
	},
	{
		id: 'ex2-week5',
		title: 'Sử dụng AI tạo sinh để hỗ trợ sáng tạo nội dung',
		tag: 'Bài 5 (Mục 5.4)',
		goal: 'Sử dụng công cụ AI tạo sinh để hỗ trợ quá trình sáng tạo nội dung số (ví dụ: viết blog và thiết kế infographic).',
		summary:
			'Tạo nội dung với chủ đề "Hội chứng trì hoãn ở sinh viên". Kết hợp 4 công cụ AI: Google Gemini (lên dàn ý), ChatGPT (viết nháp và điều chỉnh giọng văn), DALL-E 3 (tạo ảnh minh họa), và Canva AI (dàn trang infographic). Đánh giá điểm mạnh/yếu của từng công cụ.',
		fileUrl: '/assets/exercises/Ex2_Week5_Sol.docx',
		fileName: 'Ex2_Week5_Sol.docx'
	},
	{
		id: 'ex4-week6',
		title: 'Sử dụng AI có trách nhiệm trong học tập và nghiên cứu',
		tag: 'Bài 6 (Mục 6.4)',
		goal: 'Phát triển kỹ năng sử dụng AI một cách có trách nhiệm và đạo đức trong môi trường học thuật.',
		summary:
			'Phân tích chính sách sử dụng AI của Đại học RMIT Việt Nam và so sánh với các trường đại học công lập khác. Thực hiện tổng hợp tài liệu bằng ChatGPT và ghi lại quá trình kiểm chứng thông tin (fact-checking). Đề xuất bộ nguyên tắc cá nhân về sử dụng AI có trách nhiệm.',
		fileUrl: '/assets/exercises/Ex4_Week6_Sol.docx',
		fileName: 'Ex4_Week6_Sol.docx'
	}
];
