import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// api
import { RequestLogin, RequestProfile } from '../../api/auth';
// redux
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { setUser, setUserTask, setToken } from '../../redux/userSlice';
import { setBooth_id } from '../../redux/boothSlice';
// style.js & fonts
import * as S from './LoginReigster.style';
import { BiUser, BiLockOpen } from 'react-icons/bi';
import { BsFillInfoCircleFill } from 'react-icons/bs';
// components
import TopBar from '../_common/topbar/TopBar';
import LoadingModal from './LoadingModal';
import Modal from '../_common/modal/Modal';

const LoginMenu = () => {
  const navigate = useNavigate();
  // redux
  const dispatch = useAppDispatch();
  const { ID, PW } = useAppSelector(state => state.user);

  // input 상태 관리
  const [id, setID] = useState(ID);
  const [password, setPW] = useState(PW);

  // modal 관리
  const [modal, setModal] = useState(false);
  const contents =
    '- 부스 유저 ID : booth / PW : 1111 \n - 일반 유저  ID : user / PW : 0000';

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  // 토큰 쿠키 저장
  function setCookie(name, value) {
    var expires = '';
    var date = new Date();
    date.setTime(date.getTime() + 24 * 60 * 60 * 1000); // 1일간 유효
    expires = '; expires=' + date.toUTCString();
    document.cookie = name + '=' + value + expires + '; path=/';
  }

  // 테스트 로그인 처리
  const testLogin = isBooth => {
    if (isBooth == -1) {
      console.log('예외처리');
    } else {
      // 1일간 유효한 토큰 쿠키에 저장
      setCookie('token', 'true');
      dispatch(
        setUser({
          ID: id,
          PW: password,
          nickname: isBooth ? '부스 관리자1' : '일반 유저1',
        }),
      );
      dispatch(
        setUserTask({
          isBooth: isBooth,
        }),
      );
      // 부스 유저 로그인인 경우 부스 아이디 저장
      if (isBooth) {
        dispatch(
          setBooth_id({
            booth_id: 1,
          }),
        );
      }
      navigate('/');
    }
  };
  // Submit
  const onSubmitAccount = e => {
    e.preventDefault();

    (id == 'booth') & (password == '1111')
      ? testLogin(true) // 부스 유저
      : (id == 'user') & (password == '0000')
      ? testLogin(false) // 일반 유저
      : testLogin(-1); // 예외
  };

  return (
    <>
      <S.Container>
        {modal && (
          <Modal
            open={openModal}
            close={closeModal}
            title='테스트 계정 안내'
            subTitle='아래 계정 정보로 사이트 이용이 가능합니다.'
            contents={contents}
            secret='true'
            onClick={openModal}
          />
        )}
        <TopBar title='로그인' />
        <S.LogoBox />
        <S.InputForm onSubmit={onSubmitAccount}>
          <S.InputWrapper marginTop='15px'>
            <BiUser />
            <S.Input
              placeholder='아이디'
              defaultValue={ID}
              onChange={e => setID(e.target.value)}
            />
          </S.InputWrapper>
          <S.InputWrapper marginTop='15px'>
            <BiLockOpen />
            <S.Input
              type='password'
              placeholder='비밀번호'
              defaultValue={PW}
              onChange={e => setPW(e.target.value)}
            />
          </S.InputWrapper>
          <S.Button type='submit'>로그인</S.Button>
          <S.InfoWrapper onClick={openModal}>
            <div>테스트 계정 안내</div>
            <BsFillInfoCircleFill color='#FF9FC7' />
          </S.InfoWrapper>
        </S.InputForm>
      </S.Container>
    </>
  );
};

export default LoginMenu;
