import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
const tel = " 0 2470 9820";
const email = " servicedesk@sit.kmutt.ac.th";

function Footer(){
    return(
        <div className="footer-content  m-6 text-[#7B7B7B]">
            <div className="footer-line h-[2px] bg-[#989898] my-1"></div>
            <div className="footer-container flex p-10 gap-10 ">
                <div className="footer-left basis-1/3">
                    <div className="footer-left-logo">
                        <img className="w-sm" src="\Footer-img\SitLogo-footer.png"/>
                    </div>
                    <div className="footer-left-con m-4">
                        <ul>
                            <li className="flex items-center gap-2"><FaPhoneAlt /> +662 470 9850</li>
                            <li className="flex items-center gap-2"><FaLocationDot /> 126 ถนนประชาอุทิศ แขวงบางมด เขตทุ่งครุ กรุงเทพฯ 10140</li>
                            <li>webadmin@sit.kmutt.ac.th</li>
                            <li className="flex items-center gap-2"><img width="24px" src="\Footer-img\line contact.png"/>@sit.kmutt</li>
                        </ul>
                    </div>
                    <div className="footer-left-social">


                        <div className="f-faceBook"><a><img src="Footer-img\facebook contact.png"/></a></div>
                        <div className="f-IG"><a><img src="Footer-img\Instagram_icon.png.webp"/></a></div>
                        <div className="f-Youtube"><a><img src=""/></a></div>


                    </div>
                </div>
                <div className="footer-right flex basis-2/3 gap-5">
                    <div className="footer-Thai">
                        <div className="footer-Thai-p">เพื่อให้ฝ่าย Infrastructure สามารถให้บริการการใช้ห้องได้อย่างมีประสิทธิภาพ ขอความกรุณาให้ผู้จองห้อง 
                            ทำการจองล่วงหน้า อย่างน้อย 24 ชม. 
                            หากต้องการใช้ห้องในเวลาที่กระชั้นชิดมากกว่านั้น ขอให้ติดต่อ helpdesk โดยตรง
                            ทั้งนี้หากเวลาที่ทำการจองห้องหรือใช้ห้องไม่ได้อยู่ในช่วงเวลาทำงานปรกติ
                            ทางฝ่าย Infrastructure อาจไม่สามารถให้บริการได้
                            </div>
                        <div className="footer-Thai-con ">
                            <div className="footer-thai-tel flex items-center gap-2">
                            <FaPhoneAlt />{tel}
                            </div>
                            <div className="footer-thai-tel flex items-center gap-2">
                                <CiMail />{email}
                            </div>
                        </div>
                    </div>
                    <div className="footer-Eng">
                    <div className="footer-Eng-p">
                    All room reservation and service request should be made at least 24 hours in advance. If your request is urgent, please contact our helpdesk directly
                    Please note that if your request or reservation is outside the normal service hours, our staff may not be able to provide the service at the requested time.
                    </div>
                        <div className="footer-Eng-con">
                        <div className="footer-eng-tel flex items-center gap-2">
                            <FaPhoneAlt />{tel}
                            </div>
                            <div className="footer-eng-tel flex items-center gap-2">
                                <CiMail />{email}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;