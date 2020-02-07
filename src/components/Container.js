import React, { Component } from 'react'
import FileBox from './FileBox'

export default class Container extends Component {
    state={
        files:[
            {
                name:"السنة الأولى",
                optionOne:"عربية",
                optionTwo:"فرنسية",
                optionThree:"علوم",
                optionFour:"تنشئة إجتماعية"
            },
            {
                name:"السنة الثانية",
                optionOne:"عربية",
                optionTwo:"فرنسية",
                optionThree:"علوم",
                optionFour:"تنشئة إجتماعية"
            },
            {
                name:"السنة الثالثة",
                optionOne:"عربية",
                optionTwo:"فرنسية",
                optionThree:"علوم",
                optionFour:"تنشئة إجتماعية"
            },
            {
                name:"السنة الرابعة",
                optionOne:"عربية",
                optionTwo:"فرنسية",
                optionThree:"علوم",
                optionFour:"تنشئة إجتماعية"
            },
            {
                name:"السنة الخامسة",
                optionOne:"عربية",
                optionTwo:"فرنسية",
                optionThree:"علوم",
                optionFour:"تنشئة إجتماعية"
            },
            {
                name:"السنة السادسة",
                optionOne:"عربية",
                optionTwo:"فرنسية",
                optionThree:"علوم",
                optionFour:"تنشئة إجتماعية"
            }
        ]
    }
    render() {
        return (
            <>
                <div className="body-box">
                    <div className="items-box">
                        {this.state.files.map((file,index) => {
                            return <FileBox key={index} file={file}/>
                        })}
                        
                    </div>
                </div>
            </>
        )
    }
}
