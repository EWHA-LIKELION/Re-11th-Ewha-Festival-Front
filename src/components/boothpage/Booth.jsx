import React, { useEffect, useState, useRef } from 'react';

// redux
import { useAppSelector } from '../../redux/store';

// parsing boothdata function
import {
  GetLocationBooth,
  GetCategoryBooth,
  GetDayBooth,
} from './ParsingBoothData';

// mock data
import { boothsdata as mockdata } from '../../api/_mock/boothmock';

// component
import TopBar from '../_common/topbar/TopBar';
import BoothComponent from './BoothComponent';
import BoothFilterBar from './BoothFilterBar';

// style
import { B } from './Booth.style';
import { useMap } from '../boothdetailpage/useMap';
import Footer from '../_common/footer/Footer';
import Pagination from './Pagination';
import circle from '../../assets/images/boothpage/circle.svg';
import { TbArrowBigUpLineFilled } from 'react-icons/tb';

const Booth = () => {
  // redux
  const {
    filter_day,
    filter_location,
    filter_category,
    filter_viewer,
    // 이부분 아직 해결 x
    booth_page_num,
  } = useAppSelector(state => state.page);

  // state
  const [booth, setBooth] = useState([]);
  const [length, setLength] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [allboothdata, setAllboothdata] = useState(mockdata);

  // api 호출 함수
  const getAllbooth = () => {
    console.log('GET: 전체 부스 호출');
    setAllboothdata(mockdata);
  };

  // 초기 1회 전체 부스 호출
  useEffect(() => {
    getAllbooth();
  }, []);

  const getBoothData = async () => {
    if (filter_viewer == 'location') {
      const res = await GetLocationBooth(
        GetDayBooth(allboothdata, filter_day),
        filter_location,
      );
      setBooth(res);
      setLength(res.length);
    } else if (filter_viewer == 'category') {
      const res = await GetCategoryBooth(
        GetDayBooth(allboothdata, filter_day),
        filter_category,
      );
      setBooth(res);
      setLength(res.length);
    } else {
      const res = await GetDayBooth(allboothdata, filter_day);
      setBooth(res);
      setLength(res.length);
    }
  };

  useEffect(() => {
    getBoothData();
  }, [filter_day, filter_location, filter_category, filter_viewer]);

  const mapSrc = useMap(filter_location);

  const topRef = useRef(null);
  const scrollToTop = () => {
    topRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const boothRef = useRef(null);
  const scrollToBooth = () => {
    boothRef.current.scrollIntoView({ behavior: 'instant' });
  };
  return (
    <>
      <B.Wrapper ref={topRef}>
        <TopBar title='부스 목록' />
        <BoothFilterBar />
        {filter_viewer === 'location' ? (
          <B.MapContainer>
            <img src={mapSrc} />
          </B.MapContainer>
        ) : (
          ''
        )}
        <B.BoothLength ref={boothRef}>총 {length}개의 부스</B.BoothLength>
        <B.ComponentGrid>
          {booth.map(props => (
            <BoothComponent
              key={props.id}
              {...props}
              booth={booth}
              setBooth={setBooth}
            />
          ))}
        </B.ComponentGrid>
        <Pagination
          currentPage={booth_page_num}
          totalPage={totalPage}
          scrollToBooth={scrollToBooth}
        />
        <B.CircleWrapper>
          <B.CircleRect onClick={() => scrollToTop()}>
            <img src={circle} className='circle' />
            <TbArrowBigUpLineFilled size='38' color='var(--white)' />
          </B.CircleRect>
        </B.CircleWrapper>
      </B.Wrapper>
      <Footer />
    </>
  );
};

export default Booth;
