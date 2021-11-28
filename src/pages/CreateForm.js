import * as React from 'react';
import Header from '../components/formPage/Header'
import Button from "@material-ui/core/Button"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import Box from "@material-ui/core/Box"
import Grid from "@material-ui/core/Grid"
import Divider from "@material-ui/core/Divider"
import { AccessAlarm } from "@material-ui/icons"
import SetButtonField from '../components/formPage/SetButtonField'
import SelectField from '../components/common/SelectField'
import SetImageField from '../components/formPage/SetImageField'
import ExitField from '../components/formPage/ExitField'
import CheckFollowingOption from '../components/common/CheckFollowingOption'
import DateFickerField from '../components/common/DateFickerField'

function CreateForm() {

  const exampleData = {
    company: {
      name: '스타트업 company',
      url: 'www.naver.com'
    },
    setting: {
      setTime: false,
      startTime: '',
      endTime: '',
      responseCount: -1,
      progressBar: false,
      incomplete_Re: false
    },
    data: [
      {
        id: 0,
        title: '첫화면',
        type: -1,
        buttonText: '',
        timeChecked: false,
        timeOption: 0,
        img: ''
      },
      {
        id: 1,
        title: '시간제한화면',
        type: -1,
        buttonText: '',
        timeChecked: false,
        timeOption: 0,
        img: ''
      },
      {
        id: 2,
        title: '끝화면',
        type: -1,
        buttonText: '',
        timeChecked: false,
        timeOption: 0,
        img: '',
        exitChecked: false, // 끝화면에만 있음!!!
        exitCustomLinkChecked: false, // 끝화면에만 있음!!!
        exitCustomLink: '' // 끝화면에만 있음!!!
      },
      {
        id: 3,
        title: 'sample1',
        type: -1,
        buttonText: '',
        timeChecked: false,
        timeOption: 0,
        img: ''
      },
      {
        id: 4,
        title: 'sample2',
        type: -1,
        buttonText: '',
        timeChecked: false,
        timeOption: 0,
        img: ''
      }
    ]
  };
  const [data, setData] = React.useState(exampleData.data);
  const [setting, setSetting] = React.useState(exampleData.setting);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [tabIndex, setTabIndex] = React.useState(0);
  const [date, setDate] = React.useState(new Date(''));
  const addData = () => {
    console.log("addData");
    setData([
      ...data,
      {
        id: data.length,
        title: 'sample'+(data.length-2),
        type: -1,
        buttonText: '',
        timeChecked: false,
        timeOption: 0,
        img: ''
      }
    ]);
  };
  const handleTab = (index) => {
    console.log(index);
    setTabIndex(index);
  }
  const updateType = (type) => {
    console.log("updateType");
    let newData = [...data]; 
    newData[selectedIndex].type = type;
    setData(newData);
  };
  const updateButtonText = (event) => {
    let newData = [...data]; 
    newData[selectedIndex].buttonText = event;
    setData(newData);
    console.log("updateButtonText" + newData[selectedIndex].buttonText);
  }
  const updateTimeChecked = (checked) => {
    console.log("updateTimeChecked" + checked);
    let newData = [...data]; 
    newData[selectedIndex].timeChecked = checked;
    newData[selectedIndex].timeOption = checked ? 10 : 0;
    setData(newData);
  };
  const updateTime = (option) => {
    console.log("updateTime" + option);
    let newData = [...data]; 
    if(option === 0) newData[selectedIndex].timeOption = 10;
    if(option === 1) newData[selectedIndex].timeOption = 7;
    if(option === 2) newData[selectedIndex].timeOption = 13;
    setData(newData);
  };
  const updateImage = (event) => {
    console.log("updateImage" + event);
    let newData = [...data]; 
    newData[selectedIndex].img = event;
    setData(newData);
  }
  const updateExitChecked = (checked) => {
    console.log("updateExitChecked " + checked);
    let newData = [...data]; 
    newData[selectedIndex].exitChecked = checked;
    if(!checked) newData[selectedIndex].exitCustomLinkChecked = false;
    setData(newData);
  }
  const updateExitLink = (value) => {
    let newData = [...data]; 
    newData[2].exitCustomLinkChecked = value === '사용자 지정';
    setData(newData);
    console.log("updateExitLink " + newData[2].exitCustomLinkChecked);
  }
  const updateExitCustomLink = (value) => {
    let newData = [...data]; 
    newData[2].exitCustomLink = value;
    setData(newData);
    console.log("updateExitCustomLink " + newData[2].exitCustomLink);
  }
  const updateSetTime = (event) => {
    console.log(setting + event);
    let newSetting = {...setting}; 
    newSetting.setTime = event;
    setSetting(newSetting);
    console.log(setting);
  }
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const types = [
    '일반 객관식',
    '이미지 선택형',
    '순위 매기기',
    '격자형(표)',
    '드롭다운',
    '폐쇄형',
    '-----',
    '별점형',
    '척도형(NDS조사/수치형)',
    '-----',
    '중간화면'
  ];
  const timeOptions = [
    '10초(선택지 5개 기준)',
    '7초(선택지 4개 미만)',
    '13초(선택지 6개 이상)'
  ]

  return (
    <div>
      <Header action="create" />
      <div className="menu-wrapper">
        <div className="hor-menu-wrapper">
          <div className="hor-menu">
              <div className="hor-menu-ele-act" style={{ width: "100%" }}>내용추가</div>
          </div>
        </div>
        <div>
          <div className="menu-sub-title">시작화면 {selectedIndex}</div>
          <div style={{ height: "100%" }}>
            <List>
              <ListItem key={0} selected={selectedIndex === 0} onClick={(event) => handleListItemClick(event, 0)}>
                <ListItemIcon><AccessAlarm /></ListItemIcon>
                <ListItemText primary="시작화면 문구" />
              </ListItem>
            </List>
          </div>
        </div>

        <div className="menu-sub-title">시간제한 세트</div>
        <div style={{ height: "100%" }}>       
          <Box sx={{ height: "100%", overflowY: "scroll" }}>
            <List>
              <ListItem key={1} selected={selectedIndex === 1} onClick={(event) => handleListItemClick(event, 1)}>
                <ListItemIcon><AccessAlarm /></ListItemIcon>
                <ListItemText className="text-hide" primary="잠시후 시간제한 문항이 시작됩니다." />
              </ListItem>
              {data.filter(data => data.id >= 3)
              .map((item) => (
                <ListItem key={item.id} selected={selectedIndex === item.id} onClick={(event) => handleListItemClick(event, item.id)}>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItem>
              ))}
            </List>
          </Box>
        </div>

        <div className="new-page-draggable">
          <div className="menu-sub-title">끝화면</div>
          <div style={{ height: "100%" }}>
            <List>
              <ListItem key={2} selected={selectedIndex === 2} onClick={(event) => handleListItemClick(event, 2)}>
                <ListItemIcon></ListItemIcon>
                <ListItemText className="text-hide" primary="BUTTON" />
              </ListItem>
            </List>
          </div>
          <Button variant="contained" color="primary" style={{ width: "90%", left: "5%" }} onClick={addData}>새로운 페이지 추가</Button>
        </div>
      </div>

      <div className="content-wrapper">
        <div className="content-box">
          <pre className="explain">
              초기화면
          </pre>
        </div>
      </div>

      <div className="menu-wrapper" style={{ right: 0 }}>
        <div className="hor-menu-wrapper">
          <div className="hor-menu">
          <Grid container spacing={2}>
            <Grid item xs={6} onClick={(event) => handleTab(0)}>
              <div className={tabIndex === 0 ? "hor-menu-ele-act" : "hor-menu-ele"}>문항설정</div>
            </Grid>
            <Grid item xs={6} onClick={(event) => handleTab(1)}>
              <div className={tabIndex === 1 ? "hor-menu-ele-act" : "hor-menu-ele"}>설문설정</div>
            </Grid>
          </Grid>
          </div>
        </div>

        {tabIndex === 0 ?
          <div>
            <div className="menu-sub-title">현재페이지</div>
            <SelectField items={types} setItem={updateType} selected={data[selectedIndex].type} disabled={selectedIndex < 3} placeholder={
              (() => {
                if (selectedIndex === 0) return (<em>시작화면</em>);
                if (selectedIndex === 1) return (<em>시간제한 세트 첫페이지</em>);
                if (selectedIndex === 2) return (<em>끝화면</em>);
                if (selectedIndex >= 3) return (<em>유형을 선택해주세요</em>);
              })()
            } />
            <Divider />

            <div className="menu-sub-title">문항설정</div>
            <div>
              <div>{data[selectedIndex].buttonText}</div>
              <SetButtonField buttonText={data[selectedIndex].buttonText} setButtonText={updateButtonText} />
            </div>
            { selectedIndex !== 2 ?
              <div>
                <CheckFollowingOption name="시간설정" checked={data[selectedIndex].timeChecked} checkedChange={updateTimeChecked} 
                  option={<SelectField items={timeOptions} setItem={updateTime} selected={ (() => {
                    if (data[selectedIndex].timeOption === 10) return 0;
                    if (data[selectedIndex].timeOption === 7) return 1;
                    if (data[selectedIndex].timeOption === 13) return 2;
                  })()} />} />
                <Divider />

                <div className="menu-sub-title">이미지삽입</div>
                <div>
                  <SetImageField img={data[selectedIndex].img} setImage={updateImage} />
                </div>
              </div>
              :
              <ExitField data={data[2]} exitCheckedChange={updateExitChecked} exitLinkChange={updateExitLink} exitCustominkChange={updateExitCustomLink} />
            }
          </div>
          :
          <div>
          {/*
          setting: {
            setDate: false,
            startTime: '',
            endTime: '',
            responseCount: -1,
            progressBar: false,
            incomplete_Re: false
          }, */}
          <DateFickerField />
          <CheckFollowingOption name="시작/종료일 설정" checked={setting.setTime} checkedChange={updateSetTime} 
            />
        </div>}

      </div>

    </div>
  );
}
export default CreateForm;

{/*<div className="menu-wrapper" style={{ right: 0 }}>
  <pre className="explain">
    [내용추가]에서<br/>
    하위 유형을 선택해주세요
  </pre>
      </div>*/}

{/*<div style={{ padding: "10px 0px"}}>
  <FormControl fullWidth>
    <Select value={ supertype === "" ? -1 : supertype } onChange={handleSuperTypeChange} input={<OutlinedInput />}>
      <MenuItem disabled value="-1"><em>상위유형을 선택해주세요</em></MenuItem>
      {supertypes.map((type, index) => (
        <MenuItem key={type} value={index}>{type}</MenuItem>
      ))}
    </Select>
  </FormControl>
</div>
<div style={{ paddingBottom: "10px"}}>
  <FormControl fullWidth disabled={ supertype === "" }>
    <Select value={ subtype === "" ? -1 : subtype } onChange={handleSubTypeChange} input={<OutlinedInput />}>
      <MenuItem disabled value="-1"><em>하위유형을 선택해주세요</em></MenuItem>
      {subtypes[supertype === "" ? 0 : supertype ].map((type, index) => (
        <MenuItem key={type} value={index}>{type}</MenuItem>
      ))}
    </Select>
  </FormControl>
      </div>*/}