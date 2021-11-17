import Header from '../components/formPage/Header'
import { Grid, FormControl, Select, MenuItem, OutlinedInput } from "@material-ui/core"
import * as React from 'react';

function CreateForm() {
  const [supertype, setSuperType] = React.useState('');
  const [subtype, setSubType] =React.useState('');
  const handleSuperTypeChange = (event) => {
    setSuperType(event.target.value);
    setSubType(-1);
  };
  const handleSubTypeChange = (event) => {
    setSubType(event.target.value);
  };
  const supertypes = [
    '객관식',
    '선형평가',
    '추가설정(시작화면/끝화면/중간화면)'
  ];
  const subtypes = [
    /*'일반 객관식',
    '드롭다운',
    '격자형(표)',
    '이미지 선택형',
    '폐쇄형',
    '순위 매기기'*/
    ['일반 객관식', '드롭다운', '격자형(표)', '이미지 선택형', '폐쇄형', '순위 매기기'],
    ['별점형', '척도형(NDS조사/수치형)'],
    ['시작화면', '중간화면', '끝화면']
  ];

  return (
    <div>
        <Header action="create" />
        <Grid container spacing={1}>
            <Grid item sm={2}>
              <div className="menu-wrapper">
                <div className="hor-menu-wrapper">
                  <div className="hor-menu">
                    <Grid container spacing={1}>
                      <Grid item sm={4}>
                        <div className="hor-menu-ele-act2">내용추가</div>
                      </Grid>
                      <Grid item sm={4}>
                        로직설계
                      </Grid>
                      <Grid item sm={4}>
                        설문설정
                      </Grid>
                    </Grid>
                  </div>
                </div>

                <div style={{ padding: "10px 0px"}}>
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
                </div>
                
                <div className="new-page-draggable">
                    hi
                </div>
              </div>
            </Grid>
            <Grid item sm={10}>
            content 영역
            </Grid>
        </Grid>
    </div>
  );
}
export default CreateForm;