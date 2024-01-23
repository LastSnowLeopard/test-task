import Logo from '../../../assets/Vector.png'

const Services: React.FC = () => {
  return(
    <div className='max-w-4xl m-auto py-[60px]'>
      <div className='flex justify-between'>
        <img src={Logo} alt="logo" />
        <div className='bg-black text-white rounded-3xl px-3 py-1'>Contact</div>
      </div>
      <div className='pt-[60px]'>
        <h1 className='text-4xl'>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit.</h1>
        <p className='text-xl mt-4'>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. </p>
        <p className='text-xl mt-4'>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. </p>
      </div>
    </div>
  )
}

export default Services;

