function HomePage() {
  return (
    <>
      <div className="home-container flex items-center flex-col lg:flex-row gap-10 ">
        <div className="home-left">
          <div className="home-left-upcom"></div>
          <img src="Home-img/home-background.png" />
        </div>
        <div className="home-content flex flex-col lg:basis-1/3">
          <div className="home-logo">
            <img src="Home-img/home-sitLogo.png" width="400px" />
          </div>
          <div className="home-room-dropdown">
            <select
              name="floor"
              className="p-2 rounded-[10px] border border-[#6DA0FE] shadow-md focus:outline-none focus:ring-2 focus:ring-[#6DA0FE]"
            >
              <optgroup label="Lx Building">
                <option value="">--choose your floor--</option>
                <option value="LxBuilding">10th</option>
                <option value="LxBuilding">11th</option>
                <option value="LxBuilding">12th</option>
              </optgroup>
              <optgroup label="SIT Building">
                <option value="SITBuilding">1st</option>
                <option value="SITBuilding">3rd</option>
                <option value="SITBuilding">4th</option>
              </optgroup>
            </select>
          </div>
          <div className="home-room-choosing bg-amber-200 h-[407px] w-full"></div>
          <div className="home-room-calen h-[236px] bg-amber-700"></div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
