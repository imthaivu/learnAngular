export interface Room {
  totalRooms: number;
  available: number;
  booked: number;
}

export interface RoomList {
  roomNumber: string;
  roomType: string;
  amenities: string;
  price: number;
  // Thêm giảm giá % (0.15 = 15%)
  discount?: number;

  // Optional: đường dẫn ảnh
  photos?: string;

  // Ngày giờ nhận và trả phòng
  checkinTime: Date;
  checkoutTime?: Date;

  // Các thông tin thêm có thể thêm vào sau
  // notes?: string;
  rating: number; // Đánh giá của khách hàng
}
