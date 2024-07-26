import { AboutMeContainer, AboutMeContent, AboutMeImageHorizontal, AboutMeImages, AboutMeImageVertical } from "./style";

export  function AboutMe() {
  return (
    <AboutMeContainer id="aboutMe">
        <h2>Sobre Mim</h2>

        <AboutMeContent>
            <AboutMeImages >
                <AboutMeImageHorizontal src="../../../public/static/ricardo-lyra-profile-3.jpg" alt="" />
                <AboutMeImageVertical src="../../../public/static/ricardo-lyra-profile-2.jpg" alt="" />
            </AboutMeImages>

           <div>
           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Natus reprehenderit, qui cupiditate possimus assumenda, harum quis 
                ut numquam dolores optio magnam eveniet! Tempora omnis, sapiente eligendi d
                ebitis aliquid quisquam temporibus placeat quos eveniet amet praesentium 
                tempore dicta. Eum, accusamus eaque. Eveniet sapiente reprehenderit molestias
                 consequuntur ad labore adipisci error omnis?
                </p>
           </div>
        </AboutMeContent>
     
    </AboutMeContainer>
  )
}
