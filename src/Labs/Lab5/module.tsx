import React from "react";

const REMOTE_SERVER=process.env.REACT_APP_REMOTE_SERVER;
export default function module()
{

    return (

        <div>
            <a id="wd-retrieve-module"
          className="btn btn-primary"
          href={`${REMOTE_SERVER}/lab5/module`} >
                Get Module
            </a>
            <hr />
            <a id="wd-retrieve-module"
          className="btn btn-primary"
          href={`${REMOTE_SERVER}/lab5/module/name`} >
                Get Module Name
            </a>
        </div>
    )
}