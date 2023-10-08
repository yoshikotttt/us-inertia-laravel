import React from 'react'
import { Switch } from "antd";

const AcceptHome = () => {

    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
    };
  return (
      <>
          <div>
            <p>アクティブ</p>
              <Switch defaultChecked onChange={onChange} />
          </div>
      </>
  );
}

export default AcceptHome