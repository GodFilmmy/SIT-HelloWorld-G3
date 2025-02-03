import { Input } from 'antd';
import { Select, Space } from 'antd';
function ReservationForm(){
    const handleChange = (value) => {
        console.log(`selected ${value}`);
      };
    return(
        <>
        
            <div className="container">
                <div className="form-box">
                    <div className="form-box-header">รายละเอียดการจอง</div>
                    <div className="form-box-body">
                        <div className="form-row flex gap-10">
                            <div className="form-group">
                                <label className="">ชื่อผู้จอง: </label>
                                <Input placeholder="Basic usage"/>
                            </div>
                            <div className="form-group">
                                <label>สถานะ </label>
                                <Select
      defaultValue="lucy"
      style={{
        width: 120,
      }}
      onChange={handleChange}
      options={[
        {
          value: 'jack',
          label: 'Jack',
        },
        {
          value: 'lucy',
          label: 'Lucy',
        },
        {
          value: 'Yiminghe',
          label: 'yiminghe',
        },
        {
          value: 'disabled',
          label: 'Disabled',
          disabled: true,
        },
      ]}
    />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default ReservationForm;