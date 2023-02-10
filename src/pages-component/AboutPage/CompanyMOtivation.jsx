import { useInView } from 'react-intersection-observer';
import { useRef,useEffect,useState } from 'react';

const CompanyMOtivation = () => {
    const [intersectionRatio,setIntersectionRatio] =useState(0)
   const sec = useRef()

   useEffect(()=>{
    const option={
        root: null,
        threshold: [0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1],
    }

    const callback =(entries,observer)=>{
       entries.forEach((entry)=> {
            const ratio= Math.floor(entry.intersectionRatio*10)
        setIntersectionRatio(ratio);

          
       })
    }

    const observer = new IntersectionObserver(callback,option)
    observer.observe(sec.current)
   },[])

   const element =document.querySelectorAll('.sub');



   if(intersectionRatio>=0 && intersectionRatio<4){
    element.forEach((el,i)=>{el.classList.add(`top-[${0}%]`);console.log(el)})
   }else{
    element.forEach((el,i)=>{el.classList.remove(`top-[${0}%]`)})
   }

   if(intersectionRatio>=4 && intersectionRatio<6){
    element.forEach((el,i)=>{el.classList.add(`top-[${5*i}%]`);console.log(el)})
   }else{
    element.forEach((el,i)=>{el.classList.remove(`top-[${5*i}%]`)})
   }
 
   if(intersectionRatio>=6 && intersectionRatio<8){
    element.forEach((el,i)=>{el.classList.add(`top-[${10 * i}%]`);console.log(el)})
   }else{
    element.forEach((el,i)=>{el.classList.remove(`top-[${10 * i}%]`)})
   }


 

   if(intersectionRatio>=8 && intersectionRatio<=10){
    element.forEach((el,i)=>{el.classList.add(`top-[${20*i}%]`);console.log(el)})
   }else{
    element.forEach((el,i)=>{el.classList.remove(`top-[${20*i}%]`)})
   }
  




   console.log(intersectionRatio)

   
  return (
    <div className='container  relative  observer mx-auto px-10 py-32 flex flex-col  h-[90vh] space-y-5' ref={sec}
  
    >
        <div className='absolute sub top-0  h-[200px] w-full  z-0 bg-bistcuitColor border-2 border-black rounded-lg' >1</div>
        <div className='absolute sub top-0 h-[200px] w-full  z-[1] bg-bistcuitColor border-2 border-black rounded-lg'>2</div> 
        <div className='absolute sub top-0 h-[200px] w-full  z-[10] bg-bistcuitColor border-2 border-black rounded-lg' >3</div> 
        <div className='absolute sub top-0 h-[200px] w-full  z-[100] bg-bistcuitColor border-2 border-black rounded-lg' >4</div>
        
    </div>
  )
}

export default CompanyMOtivation