import { CreateNewFolderOutlined, DeleteOutlineOutlined, FeedbackOutlined, HelpOutlineOutlined, UpdateOutlined } from "@material-ui/icons";

function Menu() {
    return (
        <div className="menu-wrapper">
            <div className="menu-title">이름(UI form?)</div>
            <div className="menu-userInfo">
                <div style={{ marginBottom: "5px" }}>사용자 이름</div>
                <div className="user-email">email_ID@gmail.com</div>
            </div>
            <div className="bold-title">
                <div style={{ float: "left" }}>Project <span style={{ color: "gray" }}>3</span></div>
                <div className="icon-right">
                    <CreateNewFolderOutlined color="action" fontSize="small" />
                </div>
            </div>
            <div className="menu">
                <ul>
                    <li> 기본 프로젝트</li>
                </ul>
            </div>
            <div className="menu">
                <ul className="menu-bottom">
                    <li>
                        삭제된 문서
                        <div className="icon-right"><DeleteOutlineOutlined color="action" fontSize="small" /></div>
                    </li>
                    <li>문의 및 피드백
                        <div className="icon-right"><FeedbackOutlined color="action" fontSize="small" /></div>
                    </li>
                    <li>UI form 사용법
                        <div className="icon-right"><HelpOutlineOutlined color="action" fontSize="small" /></div>
                    </li>
                    <li>업데이트 노트
                        <div className="icon-right"><UpdateOutlined color="action" fontSize="small" /></div>
                    </li>
                </ul>
            </div>
        </div>
    );
  }
  export default Menu;