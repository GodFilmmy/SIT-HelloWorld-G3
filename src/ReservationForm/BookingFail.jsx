import React from "react";
import { Button } from "antd";

const BookingFail = ({ modal, setModal }) => {
  return (
    <div>
      {modal && (
              <div
                className="flex justify-center items-center z-50 absolute top-0 left-0 w-full h-full"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
              >
                {/* Modal container */}
                <div className="booking-success-box bg-white rounded-lg shadow-lg flex flex-col  gap-5 px-30 py-20">
                  <div className="book-success-text  mb-4 text-4xl text-red-600 text-center">
                    Booking Fail
                  </div>
                  <div className=" mb-4 text-center">ห้องนี้มีการจองแล้ว ณ เวลาที่ท่านเลือก <br/> กรุณาเลือกเวลาอื่น</div>
                  <div className="okbtn-form flex items-center justify-center ">
                    <Button type="primary" onClick={() => setModal(false)}>
                      OK
                    </Button>
                  </div>
                </div>
              </div>
            )}
    </div>
  );
};

export default BookingFail;