import React, {Component} from 'react';
import items from './Data';


const FilesContext = React.createContext();

class FilesProvider extends Component {
    state = {
        levels: [],
        subjects: [],
        allFilesByLvl:[],
        types:[
            'جذاذات',
            'امتحانات',
            'تخطيطات',
            'معلقات',
            'برامج رسمية',
            'وثائق أخرى'
        ],
        loading:true,
        levelName:"",
        subjectName:"",
        typeName:"",
        url:" ",
        finalFiles:[]
    };

    componentDidMount(){
        let allFilesByLvl = items;
        let lvls = items.map(item => {
            return item.level;
        });
        let levels = this.formatLevels(lvls);
        let sbjs = items[4].subjects.map(item => {
            return item.sbj;
        });
        let subjects = this.formatSubjects(sbjs);
        this.setState({
            levels,
            allFilesByLvl,
            subjects
        })
    }

    //format Data
    formatSubjects(items) {
        let tempItems = items.map(item => {
            if (item==="arabic"){return "عربية"}
            else if (item==="french"){return "فرنسية"}
            else if (item==="science"){return "علوم"}
            else if (item==="other"){return "تنشئة إجتماعية"};
        })
        return tempItems
    }
    formatLevels(items) {
        let tempItems = items.map(item => {
            if (item==="one"){return "السنة الأولى"};
            if (item==="two"){return "السنة الثانية"};
            if (item==="thre"){return "السنة الثالثة"};
            if (item==="four"){return "السنة الرابعة"};
            if (item==="five"){return "السنة الخامسة"};
            if (item==="six"){return "السنة السادسة"};
        })
        return tempItems
    }

    //handleChange
    handleChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name] :value
        }, this.filterFiles)
    }

    filterFiles = () => {
        let url = ""
        if(this.state.levelName !== '' && this.state.subjectName !== '' && this.state.typeName === ''){
            url = `/${this.state.levelName} ${this.state.subjectName}`;
        } else if(this.state.levelName !== '' && this.state.subjectName !== '' && this.state.typeName !== ''){
            url = `/${this.state.levelName} ${this.state.subjectName}/${this.state.typeName}`;
        }

        this.setState({
            url
        })


    }


    findLevel = lnk => {
        let a = lnk.split(" ");
        let s = a[1];
        
        
        if (s === "الأولى"){return "one"}
        else if(s==="الثانية"){return "two"}
        else if(s==="الثالثة"){return "thre"}
        else if(s==="الرابعة"){return "four"}
        else if(s==="الخامسة"){return "five"}
        else if(s==="السادسة"){return "six"}
    }

    findSubject = lnk => {
        let a = lnk.split(" ");
        let s;
        if(a.length = 4)
        {s = a[2]+ " " + a[3]}
        else {s = a[2]};
        a= s.split("/");
        s= a[0];
        
        if (s === "عربية"){return "arabic"}
        else if(s==="فرنسية"){return "french"}
        else if(s==="علوم"){return "science"}
        else if(s==="تنشئة إجتماعية"){return "other"}

    }

    findType = lnk => {
        let a = lnk.split(" ");
        let s = a[a.length - 1]
        a= s.split("/");
        s= a[1];
        
        if (s === "جذاذات"){return "files"}
        else if(s==="امتحانات"){return "exams"}
        else if(s==="تخطيطات"){return "plans"}
        else if(s==="معلقات"){return "pictures"}
    }

    findFiles = (items, lvl, sbj, tp) => {
        let a = items.filter( item => {
        return item.level === lvl;
        });

        a = a[0].subjects.filter( item =>{
            return item.sbj === sbj
        });
        switch(tp){
            case "files":
                a= a[0].files;
                break;
            case "exams":
                a= a[0].exams;
                break;
            case "plans":
                a= a[0].plans;
                break;
            case "pictures":
                a= a[0].pictures;
        }
        return a;
       

    }


    getFiles = lnk => {
        let levelName = this.findLevel(lnk);
        let subjectName = this.findSubject(lnk);
        let typeName = this.findType(lnk);
        let items = this.state.allFilesByLvl;

        return this.findFiles(items, levelName, subjectName, typeName);
    }


    render() {
        return(
            <FilesContext.Provider value={{...this.state, handleChange: this.handleChange, getFiles: this.getFiles}}>
                {this.props.children}
            </FilesContext.Provider>
        )
    }
}

const FilesConsumer = FilesContext.Consumer;

export function withConsumer(Component){
    return function ConsumerWrapper(props) {
        return <FilesConsumer>
            {value => <Component {...props} context={value}/>}
        </FilesConsumer>
    }
}

export {FilesContext, FilesProvider, FilesConsumer};