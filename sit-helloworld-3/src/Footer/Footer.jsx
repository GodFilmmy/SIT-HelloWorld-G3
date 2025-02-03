

const tel = "0 2470 9820";
const email = "servicedesk@sit.kmutt.ac.th";

function Footer(){
    return(
        <div className="footer-content border-1 m-6">
            <div className="footer-line"></div>
            <div className="footer-container flex gap-4">
                <div className="footer-left">
                    <div className="footer-left-logo">
                        <img src="\Footer-img\SitLogo-footer.png"/>
                    </div>
                </div>
                <div className="footer-right">
                    <div className="footer-Thai">
                        <div className="footer-Thai-p">เพื่อให้ฝ่าย Infrastructure สามารถให้บริการการใช้ห้องได้อย่างมีประสิทธิภาพ ขอความกรุณาให้ผู้จองห้อง 
                            ทำการจองล่วงหน้า อย่างน้อย 24 ชม. 
                            หากต้องการใช้ห้องในเวลาที่กระชั้นชิดมากกว่านั้น ขอให้ติดต่อ helpdesk โดยตรง
                            ทั้งนี้หากเวลาที่ทำการจองห้องหรือใช้ห้องไม่ได้อยู่ในช่วงเวลาทำงานปรกติ
                            ทางฝ่าย Infrastructure อาจไม่สามารถให้บริการได้
                            </div>
                        <div className="footer-Thai-con">
                            {tel}
                            <br></br>
                            {email}
                        </div>
                    </div>
                    <div className="footer-Eng">
                    <div className="footer-Eng-p">
                    All room reservation and service request should be made at least 24 hours in advance. If your request is urgent, please contact our helpdesk directly
                    Please note that if your request or reservation is outside the normal service hours, our staff may not be able to provide the service at the requested time.
                    </div>
                        <div className="footer-Eng-con">
                            {tel}
                            <br></br>
                            {email}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;