import styled from "styled-components";
export const Container = styled.div`
  height: 100vh;
  width: auto;
`;

export const HeaderContainer = styled.div`
  height: 10%;
  width: 100wh;
  background-color: #efefef;
  display: flex;
  align-items: center;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1.5em;
  margin-left: 1rem;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const AppNameWrapper = styled.div`
  display: flex;
  color: white;
`;
export const LogoWrapper = styled.div`
  margin: 0 0.5rem;
`;
export const SearchContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const TopSearchForm = styled.div`
  width 100%;
  height: auto;
  display: flex;
  justify-content: center;
  margin: 0 0.5rem;
`;

export const TopSearchInput = styled.input`
  width: 80%;
  height: 2.5rem;
  border: 0.1rem solid #efefef;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 0.9rem;
  margin: 0 1rem 0 1rem;
  text-align: center;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2rem #94d9ff;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  height: 90%;
`;

export const BodyContainer = styled.div`
  width: 80%;
  height: 100%;
  position: relative;
`;

export const SideBarContainer = styled.div`
  width: 20%;
  background-color: #f7f7f7;
`;

export const SideBarWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  // padding: 1rem 2rem;
`;

export const SideSectionContainer = styled.div`
  width: auto;
  height: 95%;
  display: flex;
  flex-direction: column;
`;

export const SideBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 1rem;
`;

export const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 1rem;
`;

export const LoginStatusContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserProfilePicContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserProfilePicWrapper = styled.div`
  height: 3rem;
  width: 3rem;
  background-color: #bbb;
  border-radius: 50%;
  border: 0.1rem solid #42bcef;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UsernameWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0.5rem;
`;

export const LogoutButton = styled.button`
  height: 5%;
  widgth: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.5;
  &: hover {
    opacity: 1;
  }
`;

export const SideSectionWrapper = styled.div`
  height: 2rem;
  width: auto;
  margin: 1rem;
  display: flex;
  align-items: center;
`;

export const SectionIcon = styled.div`
  width: 10%;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem;
`;
export const SectionName = styled.div`
  display: flex;
  width: 90%;
  padding: 1rem;
`;

export const MainTitleContainer = styled.div`
  height: 5%;
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 2rem;
  background-color: blue;
`;

export const TaskListContainer = styled.div`
  height: 85%;
  width: 70%;
  margin: 0 auto;
  overflow-y: auto;
`;

export const TaskInputContainer = styled.form`
  width: 100%;
  height: 20%
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 0;
  padding: 1rem 2rem;
`;

// Task.js

export const Checkbox = styled.input`
  margin: 1rem;
`;

export const TaskContainer = styled.div`
  height: auto;
  width: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  // border: 0.1rem solid #f1f1f1;
  border-radius: 0.5rem;
  // background-color: #efefef;
  margin: 1.5rem 3rem;
  padding: 0.1rem;
  position: relative;
`;

export const OptionContainer = styled.button`
  position: absolute;
  right: 1rem;
  display: flex;
`;

export const EditInput = styled.input`
  background-color: #efefef;
  width: 100%;
  &:focus {
    outline: none;
  }
`;

export const TaskTitleContainer = styled.div`
  width: 70%;
`;

export const DaysContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.6em;
`;
