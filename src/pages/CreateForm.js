import * as React from 'react';
import Header from '../components/formPage/Header'
import Button from "@material-ui/core/Button"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import Box from "@material-ui/core/Box"
import Grid from "@material-ui/core/Grid"
import Switch from "@material-ui/core/Switch"
import Divider from "@material-ui/core/Divider"
import { AccessAlarm } from "@material-ui/icons"
import SetButtonField from '../components/formPage/SetButtonField'
import SelectField from '../components/common/SelectField'


function CreateForm() {

  const exampleData = [
    {
      title: 'title1',
      type: '',
      buttonText: '',
      timeChecked: false
    },
    {
      title: 'title2',
      type: '',
      buttonText: '',
      timeChecked: true
    }
  ];
  const [arr, setArr] = React.useState(exampleData);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [type, setType] = React.useState('');
  const [buttonText, setButtonText] = React.useState('');
  const [timeChecked, setTimeCheck] = React.useState(false);
  const init = () => {
    console.log("init");
    setType('');
    setButtonText('');
    setTimeCheck(false);
    //setArr(exampleData);
  };
  const addArr = () => {
    console.log("addArr");
    setArr([
      ...arr,
      {
        type: '',
        buttonText: '',
        timeChecked: false
      }
    ]);
  };
  const updateArr = (index) => {
    console.log("updateArr");
    console.log('index: ' + index);
    let newArr = [...arr]; 
    newArr[index].buttonText = "Test";
    setArr(newArr);
  }
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    setType('');
    setButtonText('');
    setTimeCheck(false);
  };
  const handleTypeChange = (event) => {
    setType(event.target.value);
    //setType(index);
  };
  const handleTimeChecked = (event) => {
    setTimeCheck(event.target.checked);
    console.log(event.target.checked);
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
              {exampleData.map((item, index) => (
                <ListItem key={index+3} selected={selectedIndex === index+3} onClick={(event) => handleListItemClick(event, index+3)}>
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
          <Button variant="contained" color="primary" style={{ width: "90%", left: "5%" }}>새로운 페이지 추가</Button>
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
            <Grid item xs={6}>
              <div className="hor-menu-ele-act">문항설정</div>
            </Grid>
            <Grid item xs={6}>
              <div className="hor-menu-ele">설문설정</div>
            </Grid>
          </Grid>
          </div>
        </div>

        <div>
          <div className="menu-sub-title">현재페이지{type}</div>
          <SelectField items={types} setItem={setType} disabled={selectedIndex < 3} placeholder={
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
            <div>{buttonText}</div>
            <SetButtonField buttonText={buttonText} setButtonText={setButtonText} />
            <div>
              <div style={{ display: "flex" }}>
                <div className="menu-sub-text">시간설정</div>
                <div className="menu-right-align">
                  <Switch color="primary" checked={timeChecked} onChange={handleTimeChecked} />
                </div>
              </div>
              { timeChecked && <SelectField items={types} setItem={setType} disabled={selectedIndex < 3} placeholder={
            (() => {
              if (selectedIndex === 0) return (<em>시작화면</em>);
              if (selectedIndex === 1) return (<em>시간제한 세트 첫페이지</em>);
              if (selectedIndex === 2) return (<em>끝화면</em>);
              if (selectedIndex >= 3) return (<em>유형을 선택해주세요</em>);
            })()
          } /> }
            </div>
          </div>
          <Divider />

        </div>

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