import Ipsum from '../../../assets/ipsum.png'

const Hero: React.FC = () => {
  return (
    <div className="w-full flex justify-center h-lvh bg-black">
      <div className="bg-hero-pattern bg-contain bg-no-repeat w-full flex justify-center items-center">
        <div className='flex flex-col items-center'>
          <div className="w-[520px] text-center">
            <h1 className="text-white text-[46px] leading-tight text-center">
              Lorem ipsum dolor sit amet consectetur
            </h1>
            <p className="text-white text-[16px] text-center mt-6">
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
              mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.
            </p>
            <button className="rounded-3xl bg-white px-3 py-1 mt-6">Lorem ipsum</button>
          </div>
          <div className='flex gap-8 mt-20'>
            <img src={Ipsum} />
            <img src={Ipsum} />
            <img src={Ipsum} />
            <img src={Ipsum} />
            <img src={Ipsum} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
