import { BulletList } from "@/components/custom/BulletList"
import { CarouselSingle } from "@/components/custom/CarouselSingle"
import { CustomAccordion } from "@/components/custom/CustomAccordion"
import { FadeIn } from "@/components/custom/FadeIn"
import { HexagonPlayButton } from "@/components/custom/HexagonPlayButton"
import { ManipulativeCard } from "@/components/custom/ManipulativeCard"
import { SlidingDiv } from "@/components/custom/SlidingDiv"
import { manipulatives } from "@/constants/MathsManipulativeContent"
import Marquee from "react-fast-marquee"

export const MathsManipulativesContent = () => {

  return (
    <FadeIn threshold={0.01} className="flex flex-col w-full p-4 xs:p-8 sm:p-12 lg:p-16 xl:p-20 xl:px-32">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4  text-base md:text-lg xl:text-xl">
          <h4 className="text-2xl xl:text-3xl">Play, Learn, and Grow with the DoMath Series!</h4>
          <p>Our DoMath series, inspired by the well-known Singapore maths technique, would be an adventurous mathematical discovery for the students.</p>
          <p>This series is reinforced with manipulative tools including Tangram, Geoboard, Circular Geoboard, Tens Blocks, and Fraction Board, which turn traditional topics into engaging problems for young students. Our series, designed for children aged 4 to 13, promotes knowledge and discovery through hands-on experience.</p>
        </div>
        <SlidingDiv direction={"bottom"} className="pl-8 xs:pl-10 md:pl-24 lg:pl-32 xl:pl-52 py-4">
          <BulletList contentClass="text-base md:text-lg xl:text-xl"
          list={[
            {title: "For Schools", content: "We aim to provide kids a unique opportunity to connect with numbers, shapes, and mathematical concepts in an interactive and enriching setting in your Maths class. Our DoMath Library containing 50+ Booklets will transform your school into an exciting place of mathematical exploration."},
            {title: "For Homeschoolers", content: "You can create a lively maths corner at home with our series designed specifically for homeschooling success. Watch your child go through booklets that are designed to grow alongside them, delivering a comprehensive and adaptable learning experience."},
          ]} />
        </SlidingDiv>
        <CustomAccordion containerClass={"w-full"} type="multiple"
        items={[
          {
            title: "Manipulatives",
            id: "Manipulatives",
            content: 
            <div className="py-2 xs:py-4 md:py-6 lg:py-8 flex flex-col gap-2 md:gap-4">
              {manipulatives.map((man, i) => <ManipulativeCard key={i} {...man} index={i}/>)}
            </div>

          },
          {
            title: "Activity Booklets",
            id: "Activity Booklets",
            content: 
            <div className="flex flex-col gap-2 py-2 xs:py-4 md:py-6 lg:py-8">
              <div className="flex flex-col sm:flex-row gap-2">
              <SlidingDiv direction={"left"} className="sm:flex-[2_0_0] aspect-square bg-neutral-400">
                <CarouselSingle containerClass={"size-full"} delay={6000} items={[
                      <img key={1} src="/MathManipulative/1.jpg" className="size-full" />, 
                      <img key={2} src="/MathManipulative/2.jpg" className="size-full" />, 
                      <img key={3} src="/MathManipulative/3.jpg" className="size-full" />, 
                      <img key={4} src="/MathManipulative/4.jpg" className="size-full" />, 
                      <img key={5} src="/MathManipulative/5.jpg" className="size-full" />, 
                  ]}
                  nextButton={
                    <div className="size-10 lg:size-16 pr-2 xs:pr-0">
                      <HexagonPlayButton outerColor={"#FCBA42"} innerColor={"#FFFFFF"}/>
                    </div>
                  } />
                </SlidingDiv>
                <SlidingDiv direction={"right"} className="flex-[3_0_0] flex flex-col sm:px-4 md:px-8 gap-4 lg:gap-6 xl:gap-8 text-xs sm:text-sm md:text-base xl:text-lg">
                  <p>{`EL's activity booklets are essential tools for educators and parents looking to enhance students' math learning. Designed to complement our math manipulatives, each booklet features over 50 activities tailored to a specific tool. These resources inspire curiosity, foster creativity, and develop essential mathematical skills, encouraging meaningful exploration both in classrooms and at home.`}</p>
                  <div className="flex flex-col gap-4">
                    <h3 className="text-left ttext-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-[#FBBA41] font-semibold">Benifits of Using Activity Booklets</h3>
                    <SlidingDiv direction={"top"} className="pl-6 md:pl-16 lg:pl-24 xl:pl-32">
                      <BulletList contentClass="text-sm md:text-base xl:text-lg"
                      list={[
                        {title: "Hands-On Exploration"},
                        {title: "Engagement and Motivation"},
                        {title: "Comprehensive Skill Development"},
                        {title: "Flexible Use"},
                        {title: "Effective Extension and Reinforcement"}
                      ]} />
                    </SlidingDiv>
                  </div>
                </SlidingDiv>
              </div>
              <Marquee>
                <div className="size-40 sm:size-48 md:size-52 lg:size-64 mx-4 bg-neutral-800">
                  Test
                </div>
                <div className="size-40 sm:size-48 md:size-52 lg:size-64 mx-4 bg-neutral-800">
                  Test
                </div>
                <div className="size-40 sm:size-48 md:size-52 lg:size-64 mx-4 bg-neutral-800">
                  Test
                </div>
                <div className="size-40 sm:size-48 md:size-52 lg:size-64 mx-4 bg-neutral-800">
                  Test
                </div>
                <div className="size-40 sm:size-48 md:size-52 lg:size-64 mx-4 bg-neutral-800">
                  Test
                </div>
              </Marquee>          
            </div>
          },
        ]}
        />
      </div>
    </FadeIn>
  )
}
