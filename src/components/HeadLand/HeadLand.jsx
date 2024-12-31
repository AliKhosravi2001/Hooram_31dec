import Button from "../Button/Button";
import logohooram from "../../assets/horam.jpg";
import texthooram from "../../assets/hooram.png";
const HeadLand = () => {
  const linkchin = () => {
    window.location.href = "china.store";
  };
  const linkemarat = () => {
    window.location.href = "UAE.store";
  };
  const linkturkie = () => {
    window.location.href = "turkish.store";
  };
  const login = () => {
    window.location.href = "login";
  };
  return (
    <nav className=" flex content-center justify-between w-100 h-20 bg-[#F3D012] static ">
      <div className="flex content-center items-center gap-4 my-2 mx-2 w-96">
        <Button text="خرید از چین" link={linkchin} />
        <Button text="خرید از امارات" link={linkemarat} />
        <Button text="خرید از ترکیه" link={linkturkie} />
      </div>
      <a href="https://hooramtejarat.ir/">
        <div className="flex content-center items-center w-96">
          <img
            src={logohooram}
            alt="لوگو تجارت ماندگار هورام"
            className="h-20"
          />
          <img
            src={texthooram}
            alt="شرکت بازرگانی تجارت ماندگار هورام"
            className="h-16"
          />
        </div>
      </a>

      <div className="mx-2  my-2 w-96 flex justify-end items-center">
        <Button text="ورود / ثبت نام" link={login} />
      </div>
    </nav>
  );
};
export default HeadLand;
