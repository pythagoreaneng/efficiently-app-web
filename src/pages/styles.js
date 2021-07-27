import styled from "styled-components";
export const Container = styled.div`
  height: 100vh;
  width: auto;
`;

export const TopNavContainer = styled.div`
  height: 10%;
  width: 100wh;
  background-color: #46bcff;
  display: flex;
  align-items: center;
`;

export const TopLogoContainer = styled.div`
  width: 5%;
  display: flex;
  justify-content: center;
  alitgn-items: cetner;
`;

export const TopTitleContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  alitgn-items: cetner;
  font-size: 1.5em;
`;

export const TopTitleWrapper = styled.div`
  display: flex;
`;
export const TopSearchContainer = styled.div`
  width: 70%;
  display: flex;
`;

export const TopSearchForm = styled.div`
  width 100%;
  height: auto;
  display: flex;
  margin: 0 3rem;
`;

export const TopSearchInput = styled.input`
  width: 100%;
  height: 3rem;
  border: 0.1rem solid #efefef;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  margin: 0 1rem 0 1rem;
  text-align: center;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2rem #94d9ff;
  }
`;

export const ScreenContainer = styled.div`
  display: flex;
  height: 90%;
`;

export const SideScreenContainer = styled.div`
  height: 100%;
  width: 30%;
  background-color: #fafafa;
`;

export const SideSectionWrapper = styled.div`
  height: 2rem;
  width: auto;
  background-color: #fefefe;
  margin: 1rem;
  display: flex;
  align-items: center;
`;

export const SectionIcon = styled.div`
  width: 10%;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
export const SectionName = styled.div`
  display: flex;
  width: 90%;
`;

export const MainTitleContainer = styled.div`
  height: 5%;
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 2rem;
  background-color: blue;
`;

export const MainScreenContainer = styled.div`
  height: 100%;
  width: 70%;
  position: relative;
`;

export const SectionTasksContainer = styled.div`
  height: 85%;
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
