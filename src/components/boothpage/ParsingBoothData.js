// 날짜별 부스
export const GetDayBooth = (booths, filter_day) => {
  const DayData = booths.filter(obj => {
    return obj.day.find(day => day == filter_day);
  });
  return DayData;
};

// 장소별 부스
export const GetLocationBooth = (booths, filter_location) => {
  const LocationData = booths.filter(obj => obj.college == filter_location);
  return LocationData;
};

// 카테고리별 부스
export const GetCategoryBooth = (booths, filter_category) => {
  const CategoryData = booths.filter(obj => {
    return obj.category.find(category => category == filter_category);
  });
  return CategoryData;
};
