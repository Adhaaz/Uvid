 
/***************************************************************
 * This will hold the code for the Home Page
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/

    const tempHomeHTML = 
    `
        <!-- Intro Slides -->
        <div class="intro_slide_bdr">
            <div class="intro_slide_ctnt_bdr">
                <div class="intro_slide_ctnt_box">
                    <div class="intro_slide_box_main">
                        <div class="intro_slide_box">

                            <!-- Slide Cover -->
                            <div class="intro_slide_cover"></div>

                            <!-- Radio Buttons -->
                            <input type="radio" name="input_slider_radio" class="intro_rad" id="intro_rad1" checked />
                            <input type="radio" name="input_slider_radio" class="intro_rad" id="intro_rad2" />
                            <input type="radio" name="input_slider_radio" class="intro_rad" id="intro_rad3" />
                            <input type="radio" name="input_slider_radio" class="intro_rad" id="intro_rad4" />
                            <input type="radio" name="input_slider_radio" class="intro_rad" id="intro_rad5" />
                            <input type="radio" name="input_slider_radio" class="intro_rad" id="intro_rad6" />

                            <!-- Left Arrow -->
                            <div class="slide_arrow left_slide_arrow" id="left_arrow">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="introSlideIcon intro_icon_Left">
                                    <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
                                </svg>
                            </div>

                            <!-- Slides -->
                            <div class="intro_info_bdr bdr_1">
                                <img class="bcg_over700 over_1" src="/Library/Images/other_images/Anime_images/mha_wide.png">
                                <img class="bcg_less700 less_1" src="/Library/Images/other_images/Anime_images/mha_thin.png">
                                <div class="intro_info_bcg">
                                    <div class="intro_info_box">
                                        <div class="info_title_img">
                                            <img src="/Library/Images/other_images/Anime_images/mha_logo.png" alt="">
                                        </div>
                                        <div class="intro_info_notes">
                                            <h5 class="intro_genre">Action, Fantasy, Shonen</h5>
                                            <p class="intro_desc">
                                                The appearance of "quirks," newly discovered super powers, has been steadily increasing over the years, 
                                                with 80 percent of humanity possessing various abilities from manipulation of elements to shapeshifting. 
                                                This leaves the remainder of the world completely powerless, and Izuku Midoriya is one such individual.
                                                Since he was a child, the ambitious middle schooler has wanted nothing more than to be a hero. 
                                                Izuku's unfair fate leaves him admiring heroes and taking notes on them whenever he can. But it seems 
                                                that his persistence has borne some fruit: Izuku meets the number one hero and his personal idol, All Might. 
                                                All Might's quirk is a unique ability that can be inherited, and he has chosen Izuku to be his successor!
                                                Enduring many months of grueling training, Izuku enrolls in UA High, a prestigious high school famous for 
                                                its excellent hero training program, and this year's freshmen look especially promising. With his bizarre 
                                                but talented classmates and the looming threat of a villainous organization, Izuku will soon learn what 
                                                it really means to be a hero.
                                            </p>
                                            <div class="playShow_box">
                                                <a title="Watch My Hero Academia" class="play_Now btn lightSolidBtn" href="/Library/Anime/MyHeroAcademia.html">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="watchActionIcon">
                                                        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9V168c0-8.7 4.7-16.7 12.3-20.9z"/>
                                                    </svg>
                                                    <span>Watch Now</span>
                                                </a>
                                                <div class="save_to_PList btn hollowBtn" title="Add to Watchlist">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="watchListIcon">
                                                        <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="intro_info_bdr bdr_2">
                                <img class="bcg_over700 over_2" src="/Library/Images/other_images/Anime_images/windBreakerWider.png">
                                <img class="bcg_less700 less_2" src="/Library/Images/other_images/Anime_images/windBreakerSmall.png">
                                <div class="intro_info_bcg">
                                    <div class="intro_info_box">
                                        <div class="info_title_img">
                                            <img src="/Library/Images/other_images/Anime_images/wind_breaker.png" alt="">
                                        </div>
                                        <div class="intro_info_notes">
                                            <h5 class="intro_genre">School, Battles, Power</h5>
                                            <p class="intro_desc">
                                                From an early age, Haruka Sakura was made an outcast due to his unconventional appearance 
                                                and lack of social skills. However, the rough treatment turned him into a proficient fighter, 
                                                which is now the only thing he prides himself on. Starting at Furin High School, where it is 
                                                rumored that strength is valued over academics, Sakura has only one goal—taking the top spot.
                                                Involved in a street brawl the day before his enrollment, Sakura happens to meet a group of 
                                                his future schoolmates. Instead of the usual rejection, they fight alongside him, demonstrating 
                                                that what the school actually cares about is protecting the town of Makochi from any harm — hence 
                                                why the students call themselves "Bofurin." Surprised by the support and appreciation of the townspeople, 
                                                Sakura has a hard time accepting their goodwill. Though unfamiliar with kindness being shown to him, 
                                                Sakura must learn to push past his discomfort when Bofurin is pitted against formidable enemies. 
                                                After experiencing the feeling of acceptance, he finds himself fighting for the sake of others for the first time.
                                            </p>
                                            <div class="playShow_box">
                                                <a title="Watch Windbreaker" class="play_Now btn lightSolidBtn" href="/Library/Anime/WindBreaker.html">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="watchActionIcon">
                                                        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9V168c0-8.7 4.7-16.7 12.3-20.9z"/>
                                                    </svg>
                                                    <span>Watch Now</span>
                                                </a>
                                                <div class="save_to_PList btn hollowBtn" title="Add to Watchlist">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="watchListIcon">
                                                        <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="intro_info_bdr bdr_3">
                                <img class="bcg_over700 over_3" src="/Library/Images/other_images/Anime_images/yatagarasu_wide.png">
                                <img class="bcg_less700 less_3" src="/Library/Images/other_images/Anime_images/yatagarasu_thin.png">
                                <div class="intro_info_bcg">
                                    <div class="intro_info_box">
                                        <div class="info_title_img">
                                            <img src="/Library/Images/other_images/Anime_images/yatagarasu_logo.png" alt="">
                                        </div>
                                        <div class="intro_info_notes">
                                            <h5 class="intro_genre">Historical, Mythical, Royalty</h5>
                                            <p class="intro_desc">
                                                Yukiya is the lackluster second son of a regional boss in the North House territory. 
                                                His younger brother has overtaken him in academics. He is no good at sword battle, either. 
                                                Not that this ever bothers him. So it comes as a shock when this boy, who claims to have 
                                                no ambition whatsoever, is the one chosen to attend the Imperial Prince in Court--. 
                                                What awaits Yukiya and his new master is intrigue, murder, a mysterious drug, 
                                                and invasion from an unexpected enemy. Can they save the world of Yatagarasu?
                                            </p>
                                            <div class="playShow_box">
                                                <a title="Watch Yatagarasu" class="play_Now btn lightSolidBtn" href="/Library/Anime/Yatagarasu.html">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="watchActionIcon">
                                                        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9V168c0-8.7 4.7-16.7 12.3-20.9z"/>
                                                    </svg>
                                                    <span>Watch Now</span>
                                                </a>
                                                <div class="save_to_PList btn hollowBtn" title="Add to Watchlist">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="watchListIcon">
                                                        <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="intro_info_bdr bdr_4">
                                <img class="bcg_over700 over_4" src="/Library/Images/other_images/Anime_images/train_wide.jpg">
                                <img class="bcg_less700 less_4" src="/Library/Images/other_images/Anime_images/train_thin.jpg">
                                <div class="intro_info_bcg">
                                    <div class="intro_info_box">
                                        <div class="info_title_img">
                                            <img src="/Library/Images/other_images/Anime_images/train_logo.png" alt="">
                                        </div>
                                        <div class="intro_info_notes">
                                            <h5 class="intro_genre">Train, Journey, Adventures</h5>
                                            <p class="intro_desc">
                                                Shizuru Chikura, a high school student from Agano, is desperately searching for her friend, 
                                                Youka Nakatomi. Coming across a picture in a newspaper placing Youka in Ikebukuro, 
                                                Shizuru starts packing for a trip. But with public transportation effectively shut down, her options are limited. 
                                                Fortunately, Tairo Zenjirou, a senile old conductor and the only human adult in town, 
                                                comes to the rescue when he teaches her how to operate an abandoned train.
                                                With her destination set, Shizuru ventures off on a journey to find her missing friend. 
                                                On the day of departure, however, her other classmates — Nadeshiko Hoshi, Reimi Kuga, 
                                                and Akira Shinonome—decide to tag along at the last minute as they embark on this 
                                                one-track adventure that might expose them to dangers far surpassing anything 
                                                they have encountered in Agano.
                                            </p>
                                            <div class="playShow_box">
                                                <a title="Watch a Train to the End of The World" class="play_Now btn lightSolidBtn" href="/Library/Anime/TrainToTheEndOfTheWorld.html">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="watchActionIcon">
                                                        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9V168c0-8.7 4.7-16.7 12.3-20.9z"/>
                                                    </svg>
                                                    <span>Watch Now</span>
                                                </a>
                                                <div class="save_to_PList btn hollowBtn" title="Add to Watchlist">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="watchListIcon">
                                                        <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="intro_info_bdr bdr_5">
                                <img class="bcg_over700 over_5" src="/Library/Images/other_images/Anime_images/SoundEuphonium3_wide.png">
                                <img class="bcg_less700 less_5" src="/Library/Images/other_images/Anime_images/SoundEuphonium3_thin.jpg"">
                                <div class="intro_info_bcg">
                                    <div class="intro_info_box">
                                        <div class="info_title_img">
                                            <img src="/Library/Images/other_images/Anime_images/SoundEuphonium3_logo.png" alt="">
                                        </div>
                                        <div class="intro_info_notes">
                                            <h5 class="intro_genre">Drama, Music, Romance</h5>
                                            <p class="intro_desc">
                                                With the ensemble contest behind them, the members of the Kitauji High School concert band now aim to 
                                                win a gold medal at the national competition. For third-year club president Kumiko Oumae and her friends, 
                                                it is their last chance before graduation. Filled with anticipation and anxiety, Kumiko worries if she can 
                                                successfully lead the band. Amid her struggles, Kumiko encounters transfer student Mayu Kuroe. From her gentle 
                                                demeanor to her talented euphonium skills, Mayu was a member of the Seira Girls' School concert band—a regular 
                                                at nationals. While Mayu is friendly, Kumiko cannot help but have an indescribable feeling from their meeting.
                                                As new members arrive and plans are set in motion, the club, with an insatiable hunger for a gold medal, 
                                                learns what it truly takes to propel themselves to reach the national level.
                                            </p>
                                            <div class="playShow_box">
                                                <a title="Watch Euphonium" class="play_Now btn lightSolidBtn" href="/Library/Anime/SoundEuphonium.html">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="watchActionIcon">
                                                        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9V168c0-8.7 4.7-16.7 12.3-20.9z"/>
                                                    </svg>
                                                    <span>Watch Now</span>
                                                </a>
                                                <div class="save_to_PList btn hollowBtn" title="Add to Watchlist">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="watchListIcon">
                                                        <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="intro_info_bdr bdr_6">
                                <img class="bcg_over700 over_6" src="/Library/Anime/Watch/ClassroomoftheElite/img/3.jpg">
                                <img class="bcg_less700 less_6" src="/Library/Anime/Watch/ClassroomoftheElite/img/4.jpg">
                                <div class="intro_info_bcg">
                                    <div class="intro_info_box">
                                        <div class="info_title_img">
                                            <img src="/Library/Images/intro_images/anime_intro_images/intro_title_images/5.png" alt="">
                                        </div>
                                        <div class="intro_info_notes">
                                            <h5 class="intro_genre">School, Danger, Competition</h5>
                                            <p class="intro_desc">
                                                On the surface, Koudo Ikusei Senior High School is a utopia. The students enjoy an unparalleled amount of freedom, 
                                                and it is ranked highly in Japan. However, the reality is less than ideal. Four classes, A through D, are ranked in 
                                                order of merit, and only the top classes receive favorable treatment. Kiyotaka Ayanokouji is a student of Class D, 
                                                where the school dumps its worst. There he meets the unsociable Suzune Horikita, who believes she was placed in 
                                                Class D by mistake and desires to climb all the way to Class A, and the seemingly amicable class idol Kikyou Kushida, 
                                                whose aim is to make as many friends as possible. While class membership is permanent, class rankings are not; 
                                                students in lower ranked classes can rise in rankings if they score better than those in the top ones. 
                                                Additionally, in Class D, there are no bars on what methods can be used to get ahead. 
                                                In this cutthroat school, can they prevail against the odds and reach the top?
                                            </p>
                                            <div class="playShow_box">
                                                <a title="Watch the Classroom of the Elite" class="play_Now btn lightSolidBtn" href="/Library/Anime/ClassroomoftheElite.html">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="watchActionIcon">
                                                        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9V168c0-8.7 4.7-16.7 12.3-20.9z"/>
                                                    </svg>
                                                    <span>Watch Now</span>
                                                </a>
                                                <div class="save_to_PList btn hollowBtn" title="Add to Watchlist">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="watchListIcon">
                                                        <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- slide btns -->
                            <div class="intro_slide_nav_box">
                                <label for="intro_rad1" class="slide_nav_btn slide_btn_1"></label>
                                <label for="intro_rad2" class="slide_nav_btn slide_btn_2"></label>
                                <label for="intro_rad3" class="slide_nav_btn slide_btn_3"></label>
                                <label for="intro_rad4" class="slide_nav_btn slide_btn_4"></label>
                                <label for="intro_rad5" class="slide_nav_btn slide_btn_5"></label>
                                <label for="intro_rad6" class="slide_nav_btn slide_btn_6"></label>
                            </div>

                            <!-- Right Arrow -->
                            <div class="slide_arrow right_slide_arrow" id="right_arrow">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="introSlideIcon intro_icon_Right">
                                    <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="give_space"></div>

        <!-- Sub Slides -->
        <div class="more_content">
            
            <!-- Popular -->
            <div class="basic_slider_bdr">
                <div class="basic_slider_title_bdr">
                    <div class="basic_slider_title_box">
                        <h2>
                            <span class="big">T</span>
                            <span class="small">op Picks</span>
                        </h2>
                        <p>Top Picks for you</p>
                    </div>
                </div>
                <div class="basic_slider_ctnt">
                    <div class="basic_slider_box">
                        <div class="basic_slide_arrow left_slide_arrow hide">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="basic_slide_arrowIcon basic_icon_Left">
                                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
                            </svg>
                        </div>
                        <div class="basic_slider_card_box">
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="//Library/Anime/FullmetalPanic.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/5.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Fullmetal Panic</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                                <div class="cardAddToListBox">
                                                    <div class="cardAddToListIconBox">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="cardAddToListIcon plusIcon">
                                                            <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/>
                                                        </svg>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox add_to_WatchListBox" title="Add to watchlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon add_to_WatchListIcon cardAddToListIcon">
                                                            <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon remove_from_WatchListIcon">
                                                            <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/>
                                                        </svg>
                                                        <p style=" display: none !important;" class="add_to_WatchListText"></p>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox openAddToPLBtn" title="Add to Playlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                            <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="slideCardIcon">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/FullmetalAlchemist.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/6.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Fullmetal Alchemist</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                                <div class="cardAddToListBox">
                                                    <div class="cardAddToListIconBox">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="cardAddToListIcon plusIcon">
                                                            <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/>
                                                        </svg>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox add_to_WatchListBox" title="Add to watchlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon add_to_WatchListIcon cardAddToListIcon">
                                                            <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon remove_from_WatchListIcon">
                                                            <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/>
                                                        </svg>
                                                        <p style=" display: none !important;" class="add_to_WatchListText"></p>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox openAddToPLBtn" title="Add to Playlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                            <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="slideCardIcon">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/FullmetalAlchemistBrotherhood.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/7.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Fullmetal Alchemist: Brotherhood The arch Nemesis</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                                <div class="cardAddToListBox">
                                                    <div class="cardAddToListIconBox">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="cardAddToListIcon plusIcon">
                                                            <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/>
                                                        </svg>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox add_to_WatchListBox" title="Add to watchlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon add_to_WatchListIcon cardAddToListIcon">
                                                            <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon remove_from_WatchListIcon">
                                                            <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/>
                                                        </svg>
                                                        <p style=" display: none !important;" class="add_to_WatchListText"></p>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox openAddToPLBtn" title="Add to Playlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                            <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="slideCardIcon">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/BlueExorcist.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/9.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Blue Exorcist</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                                <div class="cardAddToListBox">
                                                    <div class="cardAddToListIconBox">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="cardAddToListIcon plusIcon">
                                                            <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/>
                                                        </svg>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox add_to_WatchListBox" title="Add to watchlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon add_to_WatchListIcon cardAddToListIcon">
                                                            <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon remove_from_WatchListIcon">
                                                            <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/>
                                                        </svg>
                                                        <p style=" display: none !important;" class="add_to_WatchListText"></p>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox openAddToPLBtn" title="Add to Playlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                            <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="slideCardIcon">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/Cyberpunk.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/15.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Cyberpunk</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                                <div class="cardAddToListBox">
                                                    <div class="cardAddToListIconBox">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="cardAddToListIcon plusIcon">
                                                            <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/>
                                                        </svg>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox add_to_WatchListBox" title="Add to watchlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon add_to_WatchListIcon cardAddToListIcon">
                                                            <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon remove_from_WatchListIcon">
                                                            <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/>
                                                        </svg>
                                                        <p style=" display: none !important;" class="add_to_WatchListText"></p>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox openAddToPLBtn" title="Add to Playlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                            <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="slideCardIcon">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/TomodachiGame.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/16.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Tomodachi Game</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                                <div class="cardAddToListBox">
                                                    <div class="cardAddToListIconBox">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="cardAddToListIcon plusIcon">
                                                            <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/>
                                                        </svg>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox add_to_WatchListBox" title="Add to watchlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon add_to_WatchListIcon cardAddToListIcon">
                                                            <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon remove_from_WatchListIcon">
                                                            <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/>
                                                        </svg>
                                                        <p style=" display: none !important;" class="add_to_WatchListText"></p>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox openAddToPLBtn" title="Add to Playlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                            <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="slideCardIcon">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/KaguyaSama.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/17.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Kaguya Sama</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                                <div class="cardAddToListBox">
                                                    <div class="cardAddToListIconBox">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="cardAddToListIcon plusIcon">
                                                            <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/>
                                                        </svg>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox add_to_WatchListBox" title="Add to watchlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon add_to_WatchListIcon cardAddToListIcon">
                                                            <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon remove_from_WatchListIcon">
                                                            <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/>
                                                        </svg>
                                                        <p style=" display: none !important;" class="add_to_WatchListText"></p>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox openAddToPLBtn" title="Add to Playlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                            <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="slideCardIcon">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/Kakegurui.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/7.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Kakegurui</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                                <div class="cardAddToListBox">
                                                    <div class="cardAddToListIconBox">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="cardAddToListIcon plusIcon">
                                                            <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/>
                                                        </svg>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox add_to_WatchListBox" title="Add to watchlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon add_to_WatchListIcon cardAddToListIcon">
                                                            <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon remove_from_WatchListIcon">
                                                            <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/>
                                                        </svg>
                                                        <p style=" display: none !important;" class="add_to_WatchListText"></p>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox openAddToPLBtn" title="Add to Playlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                            <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="slideCardIcon">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/ThatIRecentlyGotReincarnatedAsASlime.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/19.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">That I recently got Reincarnated as a Slime</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                                <div class="cardAddToListBox">
                                                    <div class="cardAddToListIconBox">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="cardAddToListIcon plusIcon">
                                                            <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/>
                                                        </svg>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox add_to_WatchListBox" title="Add to watchlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon add_to_WatchListIcon cardAddToListIcon">
                                                            <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon remove_from_WatchListIcon">
                                                            <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/>
                                                        </svg>
                                                        <p style=" display: none !important;" class="add_to_WatchListText"></p>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox openAddToPLBtn" title="Add to Playlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                            <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="slideCardIcon">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/RisingoftheShieldHero.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/20.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Rising of the Shield Hero</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                                <div class="cardAddToListBox">
                                                    <div class="cardAddToListIconBox">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="cardAddToListIcon plusIcon">
                                                            <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/>
                                                        </svg>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox add_to_WatchListBox" title="Add to watchlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon add_to_WatchListIcon cardAddToListIcon">
                                                            <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon remove_from_WatchListIcon">
                                                            <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/>
                                                        </svg>
                                                        <p style=" display: none !important;" class="add_to_WatchListText"></p>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox openAddToPLBtn" title="Add to Playlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                            <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="slideCardIcon">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                        </div>
                        <div class="basic_slide_arrow right_slide_arrow">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="basic_slide_arrowIcon basic_icon_Right">
                                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Continue watching -->
            <div class="basic_slider_bdr">
                <div class="basic_slider_title_bdr">
                    <div class="basic_slider_title_box">
                        <h2>
                            <span class="big">C</span>
                            <span class="small">ontinue</span>
                        </h2>
                        <p>Pick up where you left off</p>
                    </div>
                </div>
                <div class="basic_slider_ctnt">
                    <div class="basic_slider_box">
                        <div class="basic_slide_arrow left_slide_arrow hide">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="basic_slide_arrowIcon basic_icon_Left">
                                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
                            </svg>
                        </div>
                        <div class="basic_slider_card_box">
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="//Library/Anime/FullmetalPanic.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/5.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Fullmetal Panic</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                                <div class="cardAddToListBox">
                                                    <div class="cardAddToListIconBox">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="cardAddToListIcon plusIcon">
                                                            <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/>
                                                        </svg>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox add_to_WatchListBox" title="Add to watchlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon add_to_WatchListIcon cardAddToListIcon">
                                                            <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon remove_from_WatchListIcon">
                                                            <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/>
                                                        </svg>
                                                        <p style=" display: none !important;" class="add_to_WatchListText"></p>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox openAddToPLBtn" title="Add to Playlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                            <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="slideCardIcon">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/FullmetalAlchemist.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/6.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Fullmetal Alchemist</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                                <div class="cardAddToListBox">
                                                    <div class="cardAddToListIconBox">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="cardAddToListIcon plusIcon">
                                                            <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/>
                                                        </svg>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox add_to_WatchListBox" title="Add to watchlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon add_to_WatchListIcon cardAddToListIcon">
                                                            <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon remove_from_WatchListIcon">
                                                            <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/>
                                                        </svg>
                                                        <p style=" display: none !important;" class="add_to_WatchListText"></p>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox openAddToPLBtn" title="Add to Playlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                            <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="slideCardIcon">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/FullmetalAlchemistBrotherhood.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/7.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Fullmetal Alchemist: Brotherhood The arch Nemesis</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                                <div class="cardAddToListBox">
                                                    <div class="cardAddToListIconBox">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="cardAddToListIcon plusIcon">
                                                            <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/>
                                                        </svg>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox add_to_WatchListBox" title="Add to watchlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon add_to_WatchListIcon cardAddToListIcon">
                                                            <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon remove_from_WatchListIcon">
                                                            <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/>
                                                        </svg>
                                                        <p style=" display: none !important;" class="add_to_WatchListText"></p>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox openAddToPLBtn" title="Add to Playlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                            <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="slideCardIcon">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/BlueExorcist.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/9.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Blue Exorcist</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                                <div class="cardAddToListBox">
                                                    <div class="cardAddToListIconBox">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="cardAddToListIcon plusIcon">
                                                            <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/>
                                                        </svg>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox add_to_WatchListBox" title="Add to watchlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon add_to_WatchListIcon cardAddToListIcon">
                                                            <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon remove_from_WatchListIcon">
                                                            <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/>
                                                        </svg>
                                                        <p style=" display: none !important;" class="add_to_WatchListText"></p>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox openAddToPLBtn" title="Add to Playlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                            <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="slideCardIcon">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/Cyberpunk.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/15.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Cyberpunk</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                                <div class="cardAddToListBox">
                                                    <div class="cardAddToListIconBox">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="cardAddToListIcon plusIcon">
                                                            <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/>
                                                        </svg>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox add_to_WatchListBox" title="Add to watchlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon add_to_WatchListIcon cardAddToListIcon">
                                                            <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon remove_from_WatchListIcon">
                                                            <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/>
                                                        </svg>
                                                        <p style=" display: none !important;" class="add_to_WatchListText"></p>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox openAddToPLBtn" title="Add to Playlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                            <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="slideCardIcon">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/TomodachiGame.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/16.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Tomodachi Game</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                                <div class="cardAddToListBox">
                                                    <div class="cardAddToListIconBox">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="cardAddToListIcon plusIcon">
                                                            <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/>
                                                        </svg>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox add_to_WatchListBox" title="Add to watchlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon add_to_WatchListIcon cardAddToListIcon">
                                                            <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon remove_from_WatchListIcon">
                                                            <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/>
                                                        </svg>
                                                        <p style=" display: none !important;" class="add_to_WatchListText"></p>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox openAddToPLBtn" title="Add to Playlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                            <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="slideCardIcon">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/KaguyaSama.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/17.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Kaguya Sama</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                                <div class="cardAddToListBox">
                                                    <div class="cardAddToListIconBox">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="cardAddToListIcon plusIcon">
                                                            <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/>
                                                        </svg>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox add_to_WatchListBox" title="Add to watchlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon add_to_WatchListIcon cardAddToListIcon">
                                                            <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon remove_from_WatchListIcon">
                                                            <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/>
                                                        </svg>
                                                        <p style=" display: none !important;" class="add_to_WatchListText"></p>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox openAddToPLBtn" title="Add to Playlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                            <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="slideCardIcon">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/Kakegurui.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/7.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Kakegurui</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                                <div class="cardAddToListBox">
                                                    <div class="cardAddToListIconBox">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="cardAddToListIcon plusIcon">
                                                            <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/>
                                                        </svg>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox add_to_WatchListBox" title="Add to watchlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon add_to_WatchListIcon cardAddToListIcon">
                                                            <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon remove_from_WatchListIcon">
                                                            <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/>
                                                        </svg>
                                                        <p style=" display: none !important;" class="add_to_WatchListText"></p>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox openAddToPLBtn" title="Add to Playlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                            <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="slideCardIcon">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/ThatIRecentlyGotReincarnatedAsASlime.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/19.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">That I recently got Reincarnated as a Slime</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                                <div class="cardAddToListBox">
                                                    <div class="cardAddToListIconBox">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="cardAddToListIcon plusIcon">
                                                            <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/>
                                                        </svg>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox add_to_WatchListBox" title="Add to watchlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon add_to_WatchListIcon cardAddToListIcon">
                                                            <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon remove_from_WatchListIcon">
                                                            <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/>
                                                        </svg>
                                                        <p style=" display: none !important;" class="add_to_WatchListText"></p>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox openAddToPLBtn" title="Add to Playlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                            <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="slideCardIcon">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/RisingoftheShieldHero.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/20.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Rising of the Shield Hero</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                                <div class="cardAddToListBox">
                                                    <div class="cardAddToListIconBox">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="cardAddToListIcon plusIcon">
                                                            <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/>
                                                        </svg>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox add_to_WatchListBox" title="Add to watchlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon add_to_WatchListIcon cardAddToListIcon">
                                                            <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon remove_from_WatchListIcon">
                                                            <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/>
                                                        </svg>
                                                        <p style=" display: none !important;" class="add_to_WatchListText"></p>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox openAddToPLBtn" title="Add to Playlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                            <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="slideCardIcon">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                        </div>
                        <div class="basic_slide_arrow right_slide_arrow">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="basic_slide_arrowIcon basic_icon_Right">
                                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            
            <!-- ------ LATEST SHOWS ----- -->
            <div class="type1_Ctnt_bdr">
                <div class="type1_Ctnt_box">
                    <div class="type1_Ctnt_boxHead">
                        <div class="type1_Ctnt_box_HeadLeft">
                            <h1>
                                <span class="firsttxt">L</span>
                                <span class="secondtxt">atest</span>
                            </h1>
                        </div>
                        <div class="type1_Ctnt_box_HeadRight">
                            <a href="#" class="seeAll schedule_link">Schedule ›</a>
                        </div>
                    </div>
                    <div class="latestEp_bdr">
                        <div class="latestEp_box">
                            <a href="#" class="latestEp_card type1_ctntCard">
                                <div class="latestEp_cardImgBox">
                                    <img src="/Library/Anime/Watch/ClassroomoftheElite/img/2.jpg" alt="" class="latestEp_cardImg">
                                    <div class="type1_ctntImg_hover">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="type1_ctntImg_hoverIcon">
                                            <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                        </svg>
                                    </div>
                                </div>
                                <div class="latestEp_cardDet">
                                    <div class="latestEp_cardTitleBox">
                                        <h4 class="latestEp_cardTitle">Classroom of the Elite S3</h4>
                                        <p class="latestEp_cardSubTitle">Episode 5</p>
                                    </div>
                                    <div class="latestEp_cardPostBox">
                                        <h5 class="latestEp_cardPost">11:30pm</h5>
                                    </div>
                                </div>
                            </a>
                            <a href="#" class="latestEp_card type1_ctntCard">
                                <div class="latestEp_cardImgBox">
                                    <img src="/Library/Anime/Watch/BongouStrayDogs/img/2.jpg" alt="" class="latestEp_cardImg">
                                    <div class="type1_ctntImg_hover">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="type1_ctntImg_hoverIcon">
                                            <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                        </svg>
                                    </div>
                                </div>
                                <div class="latestEp_cardDet">
                                    <div class="latestEp_cardTitleBox">
                                        <h4 class="latestEp_cardTitle">Bongou Stray Dogs S5</h4>
                                        <p class="latestEp_cardSubTitle">Episode 4</p>
                                    </div>
                                    <div class="latestEp_cardPostBox">
                                        <h5 class="latestEp_cardPost">11:15pm</h5>
                                    </div>
                                </div>
                            </a>
                            <a href="#" class="latestEp_card type1_ctntCard">
                                <div class="latestEp_cardImgBox">
                                    <img src="/Library/Anime/Watch/AttackOnTitan/img/2.jpg" alt="" class="latestEp_cardImg">
                                    <div class="type1_ctntImg_hover">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="type1_ctntImg_hoverIcon">
                                            <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                        </svg>
                                    </div>
                                </div>
                                <div class="latestEp_cardDet">
                                    <div class="latestEp_cardTitleBox">
                                        <h4 class="latestEp_cardTitle">Attack On Titans Final Season</h4>
                                        <p class="latestEp_cardSubTitle">Episode 4</p>
                                    </div>
                                    <div class="latestEp_cardPostBox">
                                        <h5 class="latestEp_cardPost">11:00pm</h5>
                                    </div>
                                </div>
                            </a>
                            <a href="#" class="latestEp_card type1_ctntCard">
                                <div class="latestEp_cardImgBox">
                                    <img src="/Library/Anime/Watch/OnePiece/img/2.jpg" alt="" class="latestEp_cardImg">
                                    <div class="type1_ctntImg_hover">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="type1_ctntImg_hoverIcon">
                                            <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                        </svg>
                                    </div>
                                </div>
                                <div class="latestEp_cardDet">
                                    <div class="latestEp_cardTitleBox">
                                        <h4 class="latestEp_cardTitle">One Piece</h4>
                                        <p class="latestEp_cardSubTitle">Episode 1093</p>
                                    </div>
                                    <div class="latestEp_cardPostBox">
                                        <h5 class="latestEp_cardPost">10:30pm</h5>
                                    </div>
                                </div>
                            </a>
                            <a href="#" class="latestEp_card type1_ctntCard">
                                <div class="latestEp_cardImgBox">
                                    <img src="/Library/Anime/Watch/CyberpunkEdgeRunners/img/2.jpg" alt="" class="latestEp_cardImg">
                                    <div class="type1_ctntImg_hover">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="type1_ctntImg_hoverIcon">
                                            <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                        </svg>
                                    </div>
                                </div>
                                <div class="latestEp_cardDet">
                                    <div class="latestEp_cardTitleBox">
                                        <h4 class="latestEp_cardTitle">CyberPunk: Edgerunners S1</h4>
                                        <p class="latestEp_cardSubTitle">Episode 12</p>
                                    </div>
                                    <div class="latestEp_cardPostBox">
                                        <h5 class="latestEp_cardPost">9:45pm</h5>
                                    </div>
                                </div>
                            </a>
                            <a href="#" class="latestEp_card type1_ctntCard">
                                <div class="latestEp_cardImgBox">
                                    <img src="/Library/Anime/Watch/JujutsuKaisen/img/2.jpg" alt="" class="latestEp_cardImg">
                                    <div class="type1_ctntImg_hover">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="type1_ctntImg_hoverIcon">
                                            <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                        </svg>
                                    </div>
                                </div>
                                <div class="latestEp_cardDet">
                                    <div class="latestEp_cardTitleBox">
                                        <h4 class="latestEp_cardTitle">Jijutsu Kaisen S2</h4>
                                        <p class="latestEp_cardSubTitle">Episode 9</p>
                                    </div>
                                    <div class="latestEp_cardPostBox">
                                        <h5 class="latestEp_cardPost">9:35pm</h5>
                                    </div>
                                </div>
                            </a>
                            <a href="#" class="latestEp_card type1_ctntCard">
                                <div class="latestEp_cardImgBox">
                                    <img src="/Library/Anime/Watch/ASignOfAffection/img/2.jpg" alt="" class="latestEp_cardImg">
                                    <div class="type1_ctntImg_hover">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="type1_ctntImg_hoverIcon">
                                            <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                        </svg>
                                    </div>
                                </div>
                                <div class="latestEp_cardDet">
                                    <div class="latestEp_cardTitleBox">
                                        <h4 class="latestEp_cardTitle">A Sign Of Affection S1</h4>
                                        <p class="latestEp_cardSubTitle">Episode 10</p>
                                    </div>
                                    <div class="latestEp_cardPostBox">
                                        <h5 class="latestEp_cardPost">9:15pm</h5>
                                    </div>
                                </div>
                            </a>
                            <a href="#" class="latestEp_card type1_ctntCard">
                                <div class="latestEp_cardImgBox">
                                    <img src="/Library/Images/other_images/Anime_images/Metallic_Rouge.jpg" alt="" class="latestEp_cardImg">
                                    <div class="type1_ctntImg_hover">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="type1_ctntImg_hoverIcon">
                                            <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                        </svg>
                                    </div>
                                </div>
                                <div class="latestEp_cardDet">
                                    <div class="latestEp_cardTitleBox">
                                        <h4 class="latestEp_cardTitle">Metallic Rouge S1</h4>
                                        <p class="latestEp_cardSubTitle">Episode 8</p>
                                    </div>
                                    <div class="latestEp_cardPostBox">
                                        <h5 class="latestEp_cardPost">7:30pm</h5>
                                    </div>
                                </div>
                            </a>
                            <a href="#" class="latestEp_card type1_ctntCard">
                                <div class="latestEp_cardImgBox">
                                    <img src="/Library/Anime/Watch/Another/img/2.jpg" alt="" class="latestEp_cardImg">
                                    <div class="type1_ctntImg_hover">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="type1_ctntImg_hoverIcon">
                                            <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                        </svg>
                                    </div>
                                </div>
                                <div class="latestEp_cardDet">
                                    <div class="latestEp_cardTitleBox">
                                        <h4 class="latestEp_cardTitle">Another S1</h4>
                                        <p class="latestEp_cardSubTitle">Episode 12</p>
                                    </div>
                                    <div class="latestEp_cardPostBox">
                                        <h5 class="latestEp_cardPost">6:00pm</h5>
                                    </div>
                                </div>
                            </a>
                            <a href="#" class="latestEp_card type1_ctntCard">
                                <div class="latestEp_cardImgBox">
                                    <img src="/Library/Anime/Watch/SoloLeveling/img/2.png" alt="" class="latestEp_cardImg">
                                    <div class="type1_ctntImg_hover">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="type1_ctntImg_hoverIcon">
                                            <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                        </svg>
                                    </div>
                                </div>
                                <div class="latestEp_cardDet">
                                    <div class="latestEp_cardTitleBox">
                                        <h4 class="latestEp_cardTitle">Solo Levelling S1</h4>
                                        <p class="latestEp_cardSubTitle">Episode 7</p>
                                    </div>
                                    <div class="latestEp_cardPostBox">
                                        <h5 class="latestEp_cardPost">5:45pm</h5>
                                    </div>
                                </div>
                            </a>
                            <a href="#" class="latestEp_card type1_ctntCard">
                                <div class="latestEp_cardImgBox">
                                    <img src="/Library/Anime/Watch/Haikyuu/img/2.jpg" alt="" class="latestEp_cardImg">
                                    <div class="type1_ctntImg_hover">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="type1_ctntImg_hoverIcon">
                                            <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                        </svg>
                                    </div>
                                </div>
                                <div class="latestEp_cardDet">
                                    <div class="latestEp_cardTitleBox">
                                        <h4 class="latestEp_cardTitle">Haikyu S2</h4>
                                        <p class="latestEp_cardSubTitle">Episode 2</p>
                                    </div>
                                    <div class="latestEp_cardPostBox">
                                        <h5 class="latestEp_cardPost">5:15pm</h5>
                                    </div>
                                </div>
                            </a>
                            <a href="#" class="latestEp_card type1_ctntCard">
                                <div class="latestEp_cardImgBox">
                                    <img src="/Library/Anime/Watch/MashleMagicAndMuscle/img/2.jpg" alt="" class="latestEp_cardImg">
                                    <div class="type1_ctntImg_hover">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="type1_ctntImg_hoverIcon">
                                            <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                        </svg>
                                    </div>
                                </div>
                                <div class="latestEp_cardDet">
                                    <div class="latestEp_cardTitleBox">
                                        <h4 class="latestEp_cardTitle">Mashle Magic And Muscle S1</h4>
                                        <p class="latestEp_cardSubTitle">Episode 11</p>
                                    </div>
                                    <div class="latestEp_cardPostBox">
                                        <h5 class="latestEp_cardPost">4:40pm</h5>
                                    </div>
                                </div>
                            </a>
                            <a href="#" class="latestEp_card type1_ctntCard">
                                <div class="latestEp_cardImgBox">
                                    <img src="/Library/Anime/Watch/RentaGirlfriend/img/2.jpg" alt="" class="latestEp_cardImg">
                                    <div class="type1_ctntImg_hover">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="type1_ctntImg_hoverIcon">
                                            <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                        </svg>
                                    </div>
                                </div>
                                <div class="latestEp_cardDet">
                                    <div class="latestEp_cardTitleBox">
                                        <h4 class="latestEp_cardTitle">Rent A Girlfriend S2</h4>
                                        <p class="latestEp_cardSubTitle">Episode 12</p>
                                    </div>
                                    <div class="latestEp_cardPostBox">
                                        <h5 class="latestEp_cardPost">4:25pm</h5>
                                    </div>
                                </div>
                            </a>
                            <a href="#" class="latestEp_card type1_ctntCard">
                                <div class="latestEp_cardImgBox">
                                    <img src="/Library/Anime/Watch/HeavenOfficialsBlessing/img/2.jpg" alt="" class="latestEp_cardImg">
                                    <div class="type1_ctntImg_hover">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="type1_ctntImg_hoverIcon">
                                            <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                        </svg>
                                    </div>
                                </div>
                                <div class="latestEp_cardDet">
                                    <div class="latestEp_cardTitleBox">
                                        <h4 class="latestEp_cardTitle">Heave official's Blessings S1</h4>
                                        <p class="latestEp_cardSubTitle">Episode 8</p>
                                    </div>
                                    <div class="latestEp_cardPostBox">
                                        <h5 class="latestEp_cardPost">3:00pm</h5>
                                    </div>
                                </div>
                            </a>
                            <a href="#" class="latestEp_card type1_ctntCard">
                                <div class="latestEp_cardImgBox">
                                    <img src="/Library/Anime/Watch/DemonSlayer/img/2.jpg" alt="" class="latestEp_cardImg">
                                    <div class="type1_ctntImg_hover">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="type1_ctntImg_hoverIcon">
                                            <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                        </svg>
                                    </div>
                                </div>
                                <div class="latestEp_cardDet">
                                    <div class="latestEp_cardTitleBox">
                                        <h4 class="latestEp_cardTitle">Demon Slayer S3</h4>
                                        <p class="latestEp_cardSubTitle">Episode 3</p>
                                    </div>
                                    <div class="latestEp_cardPostBox">
                                        <h5 class="latestEp_cardPost">1:45pm</h5>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="latestEp_btn latestEp_view_more darkSolidBtn">show more</div>
                    <div class="latestEp_btn latestEp_schedule inactive darkSolidBtn">Schedule</div>
                </div>
            </div>


            <!-- Trending Movies -->
            <div class="basic_slider_bdr">
                <div class="basic_slider_title_bdr">
                    <div class="basic_slider_title_box">
                        <h2>
                            <span class="big">T</span>
                            <span class="small">rending Movies</span>
                        </h2>
                        <p>Movies currently trending</p>
                    </div>
                </div>
                <div class="basic_slider_ctnt">
                    <div class="basic_slider_box">
                        <div class="basic_slide_arrow left_slide_arrow hide">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="basic_slide_arrowIcon basic_icon_Left">
                                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
                            </svg>
                        </div>
                        <div class="basic_slider_card_box">
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="//Library/Anime/FullmetalPanic.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/5.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Fullmetal Panic</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                                <div class="cardAddToListBox">
                                                    <div class="cardAddToListIconBox">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="cardAddToListIcon plusIcon">
                                                            <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/>
                                                        </svg>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox add_to_WatchListBox" title="Add to watchlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon add_to_WatchListIcon cardAddToListIcon">
                                                            <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon remove_from_WatchListIcon">
                                                            <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/>
                                                        </svg>
                                                        <p style=" display: none !important;" class="add_to_WatchListText"></p>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox openAddToPLBtn" title="Add to Playlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                            <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="slideCardIcon">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/FullmetalAlchemist.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/6.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Fullmetal Alchemist</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                                <div class="cardAddToListBox">
                                                    <div class="cardAddToListIconBox">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="cardAddToListIcon plusIcon">
                                                            <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/>
                                                        </svg>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox add_to_WatchListBox" title="Add to watchlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon add_to_WatchListIcon cardAddToListIcon">
                                                            <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon remove_from_WatchListIcon">
                                                            <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/>
                                                        </svg>
                                                        <p style=" display: none !important;" class="add_to_WatchListText"></p>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox openAddToPLBtn" title="Add to Playlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                            <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="slideCardIcon">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/FullmetalAlchemistBrotherhood.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/7.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Fullmetal Alchemist: Brotherhood The arch Nemesis</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                                <div class="cardAddToListBox">
                                                    <div class="cardAddToListIconBox">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="cardAddToListIcon plusIcon">
                                                            <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/>
                                                        </svg>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox add_to_WatchListBox" title="Add to watchlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon add_to_WatchListIcon cardAddToListIcon">
                                                            <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon remove_from_WatchListIcon">
                                                            <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/>
                                                        </svg>
                                                        <p style=" display: none !important;" class="add_to_WatchListText"></p>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox openAddToPLBtn" title="Add to Playlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                            <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="slideCardIcon">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/BlueExorcist.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/9.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Blue Exorcist</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                                <div class="cardAddToListBox">
                                                    <div class="cardAddToListIconBox">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="cardAddToListIcon plusIcon">
                                                            <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/>
                                                        </svg>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox add_to_WatchListBox" title="Add to watchlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon add_to_WatchListIcon cardAddToListIcon">
                                                            <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon remove_from_WatchListIcon">
                                                            <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/>
                                                        </svg>
                                                        <p style=" display: none !important;" class="add_to_WatchListText"></p>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox openAddToPLBtn" title="Add to Playlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                            <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="slideCardIcon">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/Cyberpunk.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/15.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Cyberpunk</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                                <div class="cardAddToListBox">
                                                    <div class="cardAddToListIconBox">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="cardAddToListIcon plusIcon">
                                                            <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/>
                                                        </svg>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox add_to_WatchListBox" title="Add to watchlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon add_to_WatchListIcon cardAddToListIcon">
                                                            <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon remove_from_WatchListIcon">
                                                            <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/>
                                                        </svg>
                                                        <p style=" display: none !important;" class="add_to_WatchListText"></p>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox openAddToPLBtn" title="Add to Playlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                            <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="slideCardIcon">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/TomodachiGame.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/16.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Tomodachi Game</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                                <div class="cardAddToListBox">
                                                    <div class="cardAddToListIconBox">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="cardAddToListIcon plusIcon">
                                                            <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/>
                                                        </svg>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox add_to_WatchListBox" title="Add to watchlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon add_to_WatchListIcon cardAddToListIcon">
                                                            <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon remove_from_WatchListIcon">
                                                            <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/>
                                                        </svg>
                                                        <p style=" display: none !important;" class="add_to_WatchListText"></p>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox openAddToPLBtn" title="Add to Playlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                            <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="slideCardIcon">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/KaguyaSama.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/17.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Kaguya Sama</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                                <div class="cardAddToListBox">
                                                    <div class="cardAddToListIconBox">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="cardAddToListIcon plusIcon">
                                                            <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/>
                                                        </svg>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox add_to_WatchListBox" title="Add to watchlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon add_to_WatchListIcon cardAddToListIcon">
                                                            <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon remove_from_WatchListIcon">
                                                            <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/>
                                                        </svg>
                                                        <p style=" display: none !important;" class="add_to_WatchListText"></p>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox openAddToPLBtn" title="Add to Playlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                            <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="slideCardIcon">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/Kakegurui.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/7.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Kakegurui</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                                <div class="cardAddToListBox">
                                                    <div class="cardAddToListIconBox">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="cardAddToListIcon plusIcon">
                                                            <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/>
                                                        </svg>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox add_to_WatchListBox" title="Add to watchlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon add_to_WatchListIcon cardAddToListIcon">
                                                            <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon remove_from_WatchListIcon">
                                                            <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/>
                                                        </svg>
                                                        <p style=" display: none !important;" class="add_to_WatchListText"></p>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox openAddToPLBtn" title="Add to Playlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                            <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="slideCardIcon">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/ThatIRecentlyGotReincarnatedAsASlime.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/19.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">That I recently got Reincarnated as a Slime</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                                <div class="cardAddToListBox">
                                                    <div class="cardAddToListIconBox">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="cardAddToListIcon plusIcon">
                                                            <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/>
                                                        </svg>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox add_to_WatchListBox" title="Add to watchlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon add_to_WatchListIcon cardAddToListIcon">
                                                            <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon remove_from_WatchListIcon">
                                                            <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/>
                                                        </svg>
                                                        <p style=" display: none !important;" class="add_to_WatchListText"></p>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox openAddToPLBtn" title="Add to Playlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                            <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="slideCardIcon">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/RisingoftheShieldHero.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/20.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Rising of the Shield Hero</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                                <div class="cardAddToListBox">
                                                    <div class="cardAddToListIconBox">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="cardAddToListIcon plusIcon">
                                                            <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/>
                                                        </svg>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox add_to_WatchListBox" title="Add to watchlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon add_to_WatchListIcon cardAddToListIcon">
                                                            <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon remove_from_WatchListIcon">
                                                            <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/>
                                                        </svg>
                                                        <p style=" display: none !important;" class="add_to_WatchListText"></p>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox openAddToPLBtn" title="Add to Playlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                            <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="slideCardIcon">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                        </div>
                        <div class="basic_slide_arrow right_slide_arrow">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="basic_slide_arrowIcon basic_icon_Right">
                                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Trending Tv Shows -->
            <div class="basic_slider_bdr">
                <div class="basic_slider_title_bdr">
                    <div class="basic_slider_title_box">
                        <h2>
                            <span class="big">T</span>
                            <span class="small">rending Tv</span>
                        </h2>
                        <p>TV Shows currently trending</p>
                    </div>
                </div>
                <div class="basic_slider_ctnt">
                    <div class="basic_slider_box">
                        <div class="basic_slide_arrow left_slide_arrow hide">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="basic_slide_arrowIcon basic_icon_Left">
                                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
                            </svg>
                        </div>
                        <div class="basic_slider_card_box">
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="//Library/Anime/FullmetalPanic.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/5.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Fullmetal Panic</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                                <div class="cardAddToListBox">
                                                    <div class="cardAddToListIconBox">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="cardAddToListIcon plusIcon">
                                                            <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/>
                                                        </svg>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox add_to_WatchListBox" title="Add to watchlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon add_to_WatchListIcon cardAddToListIcon">
                                                            <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon remove_from_WatchListIcon">
                                                            <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/>
                                                        </svg>
                                                        <p style=" display: none !important;" class="add_to_WatchListText"></p>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox openAddToPLBtn" title="Add to Playlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                            <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="slideCardIcon">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/FullmetalAlchemist.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/6.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Fullmetal Alchemist</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                                <div class="cardAddToListBox">
                                                    <div class="cardAddToListIconBox">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="cardAddToListIcon plusIcon">
                                                            <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/>
                                                        </svg>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox add_to_WatchListBox" title="Add to watchlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon add_to_WatchListIcon cardAddToListIcon">
                                                            <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon remove_from_WatchListIcon">
                                                            <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/>
                                                        </svg>
                                                        <p style=" display: none !important;" class="add_to_WatchListText"></p>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox openAddToPLBtn" title="Add to Playlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                            <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="slideCardIcon">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/FullmetalAlchemistBrotherhood.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/7.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Fullmetal Alchemist: Brotherhood The arch Nemesis</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                                <div class="cardAddToListBox">
                                                    <div class="cardAddToListIconBox">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="cardAddToListIcon plusIcon">
                                                            <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/>
                                                        </svg>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox add_to_WatchListBox" title="Add to watchlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon add_to_WatchListIcon cardAddToListIcon">
                                                            <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon remove_from_WatchListIcon">
                                                            <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/>
                                                        </svg>
                                                        <p style=" display: none !important;" class="add_to_WatchListText"></p>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox openAddToPLBtn" title="Add to Playlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                            <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="slideCardIcon">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/BlueExorcist.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/9.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Blue Exorcist</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                                <div class="cardAddToListBox">
                                                    <div class="cardAddToListIconBox">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="cardAddToListIcon plusIcon">
                                                            <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/>
                                                        </svg>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox add_to_WatchListBox" title="Add to watchlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon add_to_WatchListIcon cardAddToListIcon">
                                                            <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon remove_from_WatchListIcon">
                                                            <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/>
                                                        </svg>
                                                        <p style=" display: none !important;" class="add_to_WatchListText"></p>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox openAddToPLBtn" title="Add to Playlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                            <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="slideCardIcon">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/Cyberpunk.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/15.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Cyberpunk</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                                <div class="cardAddToListBox">
                                                    <div class="cardAddToListIconBox">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="cardAddToListIcon plusIcon">
                                                            <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/>
                                                        </svg>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox add_to_WatchListBox" title="Add to watchlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon add_to_WatchListIcon cardAddToListIcon">
                                                            <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon remove_from_WatchListIcon">
                                                            <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/>
                                                        </svg>
                                                        <p style=" display: none !important;" class="add_to_WatchListText"></p>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox openAddToPLBtn" title="Add to Playlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                            <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="slideCardIcon">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/TomodachiGame.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/16.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Tomodachi Game</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                                <div class="cardAddToListBox">
                                                    <div class="cardAddToListIconBox">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="cardAddToListIcon plusIcon">
                                                            <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/>
                                                        </svg>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox add_to_WatchListBox" title="Add to watchlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon add_to_WatchListIcon cardAddToListIcon">
                                                            <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon remove_from_WatchListIcon">
                                                            <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/>
                                                        </svg>
                                                        <p style=" display: none !important;" class="add_to_WatchListText"></p>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox openAddToPLBtn" title="Add to Playlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                            <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="slideCardIcon">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/KaguyaSama.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/17.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Kaguya Sama</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                                <div class="cardAddToListBox">
                                                    <div class="cardAddToListIconBox">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="cardAddToListIcon plusIcon">
                                                            <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/>
                                                        </svg>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox add_to_WatchListBox" title="Add to watchlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon add_to_WatchListIcon cardAddToListIcon">
                                                            <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon remove_from_WatchListIcon">
                                                            <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/>
                                                        </svg>
                                                        <p style=" display: none !important;" class="add_to_WatchListText"></p>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox openAddToPLBtn" title="Add to Playlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                            <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="slideCardIcon">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/Kakegurui.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/7.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Kakegurui</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                                <div class="cardAddToListBox">
                                                    <div class="cardAddToListIconBox">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="cardAddToListIcon plusIcon">
                                                            <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/>
                                                        </svg>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox add_to_WatchListBox" title="Add to watchlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon add_to_WatchListIcon cardAddToListIcon">
                                                            <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon remove_from_WatchListIcon">
                                                            <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/>
                                                        </svg>
                                                        <p style=" display: none !important;" class="add_to_WatchListText"></p>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox openAddToPLBtn" title="Add to Playlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                            <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="slideCardIcon">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/ThatIRecentlyGotReincarnatedAsASlime.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/19.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">That I recently got Reincarnated as a Slime</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                                <div class="cardAddToListBox">
                                                    <div class="cardAddToListIconBox">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="cardAddToListIcon plusIcon">
                                                            <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/>
                                                        </svg>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox add_to_WatchListBox" title="Add to watchlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon add_to_WatchListIcon cardAddToListIcon">
                                                            <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon remove_from_WatchListIcon">
                                                            <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/>
                                                        </svg>
                                                        <p style=" display: none !important;" class="add_to_WatchListText"></p>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox openAddToPLBtn" title="Add to Playlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                            <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="slideCardIcon">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/RisingoftheShieldHero.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/20.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Rising of the Shield Hero</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                                <div class="cardAddToListBox">
                                                    <div class="cardAddToListIconBox">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="cardAddToListIcon plusIcon">
                                                            <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/>
                                                        </svg>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox add_to_WatchListBox" title="Add to watchlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon add_to_WatchListIcon cardAddToListIcon">
                                                            <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon remove_from_WatchListIcon">
                                                            <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/>
                                                        </svg>
                                                        <p style=" display: none !important;" class="add_to_WatchListText"></p>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox openAddToPLBtn" title="Add to Playlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                            <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="slideCardIcon">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                        </div>
                        <div class="basic_slide_arrow right_slide_arrow">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="basic_slide_arrowIcon basic_icon_Right">
                                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>        

            <!-- Popular -->
            <div class="basic_slider_bdr">
                <div class="basic_slider_title_bdr">
                    <div class="basic_slider_title_box">
                        <h2>
                            <span class="big">P</span>
                            <span class="small">opular</span>
                        </h2>
                        <p>Uvid most popular shows</p>
                    </div>
                </div>
                <div class="basic_slider_ctnt">
                    <div class="basic_slider_box">
                        <div class="basic_slide_arrow left_slide_arrow hide">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="basic_slide_arrowIcon basic_icon_Left">
                                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
                            </svg>
                        </div>
                        <div class="basic_slider_card_box">
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="//Library/Anime/FullmetalPanic.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/5.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Fullmetal Panic</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                                <div class="cardAddToListBox">
                                                    <div class="cardAddToListIconBox">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="cardAddToListIcon plusIcon">
                                                            <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/>
                                                        </svg>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox add_to_WatchListBox" title="Add to watchlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon add_to_WatchListIcon cardAddToListIcon">
                                                            <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon remove_from_WatchListIcon">
                                                            <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/>
                                                        </svg>
                                                        <p style=" display: none !important;" class="add_to_WatchListText"></p>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox openAddToPLBtn" title="Add to Playlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                            <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="slideCardIcon">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/FullmetalAlchemist.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/6.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Fullmetal Alchemist</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                                <div class="cardAddToListBox">
                                                    <div class="cardAddToListIconBox">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="cardAddToListIcon plusIcon">
                                                            <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/>
                                                        </svg>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox add_to_WatchListBox" title="Add to watchlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon add_to_WatchListIcon cardAddToListIcon">
                                                            <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon remove_from_WatchListIcon">
                                                            <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/>
                                                        </svg>
                                                        <p style=" display: none !important;" class="add_to_WatchListText"></p>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox openAddToPLBtn" title="Add to Playlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                            <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="slideCardIcon">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/FullmetalAlchemistBrotherhood.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/7.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Fullmetal Alchemist: Brotherhood The arch Nemesis</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                                <div class="cardAddToListBox">
                                                    <div class="cardAddToListIconBox">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="cardAddToListIcon plusIcon">
                                                            <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/>
                                                        </svg>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox add_to_WatchListBox" title="Add to watchlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon add_to_WatchListIcon cardAddToListIcon">
                                                            <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon remove_from_WatchListIcon">
                                                            <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/>
                                                        </svg>
                                                        <p style=" display: none !important;" class="add_to_WatchListText"></p>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox openAddToPLBtn" title="Add to Playlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                            <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="slideCardIcon">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/BlueExorcist.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/9.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Blue Exorcist</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                                <div class="cardAddToListBox">
                                                    <div class="cardAddToListIconBox">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="cardAddToListIcon plusIcon">
                                                            <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/>
                                                        </svg>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox add_to_WatchListBox" title="Add to watchlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon add_to_WatchListIcon cardAddToListIcon">
                                                            <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon remove_from_WatchListIcon">
                                                            <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/>
                                                        </svg>
                                                        <p style=" display: none !important;" class="add_to_WatchListText"></p>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox openAddToPLBtn" title="Add to Playlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                            <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="slideCardIcon">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/Cyberpunk.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/15.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Cyberpunk</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                                <div class="cardAddToListBox">
                                                    <div class="cardAddToListIconBox">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="cardAddToListIcon plusIcon">
                                                            <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/>
                                                        </svg>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox add_to_WatchListBox" title="Add to watchlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon add_to_WatchListIcon cardAddToListIcon">
                                                            <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon remove_from_WatchListIcon">
                                                            <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/>
                                                        </svg>
                                                        <p style=" display: none !important;" class="add_to_WatchListText"></p>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox openAddToPLBtn" title="Add to Playlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                            <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="slideCardIcon">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/TomodachiGame.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/16.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Tomodachi Game</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                                <div class="cardAddToListBox">
                                                    <div class="cardAddToListIconBox">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="cardAddToListIcon plusIcon">
                                                            <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/>
                                                        </svg>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox add_to_WatchListBox" title="Add to watchlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon add_to_WatchListIcon cardAddToListIcon">
                                                            <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon remove_from_WatchListIcon">
                                                            <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/>
                                                        </svg>
                                                        <p style=" display: none !important;" class="add_to_WatchListText"></p>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox openAddToPLBtn" title="Add to Playlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                            <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="slideCardIcon">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/KaguyaSama.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/17.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Kaguya Sama</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                                <div class="cardAddToListBox">
                                                    <div class="cardAddToListIconBox">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="cardAddToListIcon plusIcon">
                                                            <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/>
                                                        </svg>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox add_to_WatchListBox" title="Add to watchlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon add_to_WatchListIcon cardAddToListIcon">
                                                            <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon remove_from_WatchListIcon">
                                                            <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/>
                                                        </svg>
                                                        <p style=" display: none !important;" class="add_to_WatchListText"></p>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox openAddToPLBtn" title="Add to Playlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                            <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="slideCardIcon">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/Kakegurui.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/7.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Kakegurui</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                                <div class="cardAddToListBox">
                                                    <div class="cardAddToListIconBox">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="cardAddToListIcon plusIcon">
                                                            <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/>
                                                        </svg>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox add_to_WatchListBox" title="Add to watchlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon add_to_WatchListIcon cardAddToListIcon">
                                                            <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon remove_from_WatchListIcon">
                                                            <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/>
                                                        </svg>
                                                        <p style=" display: none !important;" class="add_to_WatchListText"></p>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox openAddToPLBtn" title="Add to Playlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                            <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="slideCardIcon">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/ThatIRecentlyGotReincarnatedAsASlime.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/19.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">That I recently got Reincarnated as a Slime</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                                <div class="cardAddToListBox">
                                                    <div class="cardAddToListIconBox">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="cardAddToListIcon plusIcon">
                                                            <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/>
                                                        </svg>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox add_to_WatchListBox" title="Add to watchlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon add_to_WatchListIcon cardAddToListIcon">
                                                            <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon remove_from_WatchListIcon">
                                                            <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/>
                                                        </svg>
                                                        <p style=" display: none !important;" class="add_to_WatchListText"></p>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox openAddToPLBtn" title="Add to Playlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                            <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="slideCardIcon">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/RisingoftheShieldHero.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/20.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Rising of the Shield Hero</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                                <div class="cardAddToListBox">
                                                    <div class="cardAddToListIconBox">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="cardAddToListIcon plusIcon">
                                                            <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/>
                                                        </svg>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox add_to_WatchListBox" title="Add to watchlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon add_to_WatchListIcon cardAddToListIcon">
                                                            <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon remove_from_WatchListIcon">
                                                            <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/>
                                                        </svg>
                                                        <p style=" display: none !important;" class="add_to_WatchListText"></p>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox openAddToPLBtn" title="Add to Playlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                            <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="slideCardIcon">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                        </div>
                        <div class="basic_slide_arrow right_slide_arrow">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="basic_slide_arrowIcon basic_icon_Right">
                                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Top Rated -->
            <div class="basic_slider_bdr">
                <div class="basic_slider_title_bdr">
                    <div class="basic_slider_title_box">
                        <h2>
                            <span class="big">T</span>
                            <span class="small">op Rated</span>
                        </h2>
                        <p>Our viewers loved these shows</p>
                    </div>
                </div>
                <div class="basic_slider_ctnt">
                    <div class="basic_slider_box">
                        <div class="basic_slide_arrow left_slide_arrow hide">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="basic_slide_arrowIcon basic_icon_Left">
                                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
                            </svg>
                        </div>
                        <div class="basic_slider_card_box">
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="//Library/Anime/FullmetalPanic.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/5.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Fullmetal Panic</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                                <div class="cardAddToListBox">
                                                    <div class="cardAddToListIconBox">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="cardAddToListIcon plusIcon">
                                                            <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/>
                                                        </svg>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox add_to_WatchListBox" title="Add to watchlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon add_to_WatchListIcon cardAddToListIcon">
                                                            <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon remove_from_WatchListIcon">
                                                            <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/>
                                                        </svg>
                                                        <p style=" display: none !important;" class="add_to_WatchListText"></p>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox openAddToPLBtn" title="Add to Playlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                            <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="slideCardIcon">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/FullmetalAlchemist.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/6.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Fullmetal Alchemist</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                                <div class="cardAddToListBox">
                                                    <div class="cardAddToListIconBox">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="cardAddToListIcon plusIcon">
                                                            <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/>
                                                        </svg>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox add_to_WatchListBox" title="Add to watchlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon add_to_WatchListIcon cardAddToListIcon">
                                                            <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon remove_from_WatchListIcon">
                                                            <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/>
                                                        </svg>
                                                        <p style=" display: none !important;" class="add_to_WatchListText"></p>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox openAddToPLBtn" title="Add to Playlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                            <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="slideCardIcon">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/FullmetalAlchemistBrotherhood.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/7.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Fullmetal Alchemist: Brotherhood The arch Nemesis</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                                <div class="cardAddToListBox">
                                                    <div class="cardAddToListIconBox">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="cardAddToListIcon plusIcon">
                                                            <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/>
                                                        </svg>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox add_to_WatchListBox" title="Add to watchlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon add_to_WatchListIcon cardAddToListIcon">
                                                            <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon remove_from_WatchListIcon">
                                                            <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/>
                                                        </svg>
                                                        <p style=" display: none !important;" class="add_to_WatchListText"></p>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox openAddToPLBtn" title="Add to Playlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                            <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="slideCardIcon">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/BlueExorcist.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/9.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Blue Exorcist</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                                <div class="cardAddToListBox">
                                                    <div class="cardAddToListIconBox">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="cardAddToListIcon plusIcon">
                                                            <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/>
                                                        </svg>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox add_to_WatchListBox" title="Add to watchlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon add_to_WatchListIcon cardAddToListIcon">
                                                            <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon remove_from_WatchListIcon">
                                                            <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/>
                                                        </svg>
                                                        <p style=" display: none !important;" class="add_to_WatchListText"></p>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox openAddToPLBtn" title="Add to Playlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                            <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="slideCardIcon">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/Cyberpunk.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/15.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Cyberpunk</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                                <div class="cardAddToListBox">
                                                    <div class="cardAddToListIconBox">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="cardAddToListIcon plusIcon">
                                                            <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/>
                                                        </svg>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox add_to_WatchListBox" title="Add to watchlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon add_to_WatchListIcon cardAddToListIcon">
                                                            <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon remove_from_WatchListIcon">
                                                            <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/>
                                                        </svg>
                                                        <p style=" display: none !important;" class="add_to_WatchListText"></p>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox openAddToPLBtn" title="Add to Playlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                            <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="slideCardIcon">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/TomodachiGame.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/16.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Tomodachi Game</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                                <div class="cardAddToListBox">
                                                    <div class="cardAddToListIconBox">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="cardAddToListIcon plusIcon">
                                                            <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/>
                                                        </svg>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox add_to_WatchListBox" title="Add to watchlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon add_to_WatchListIcon cardAddToListIcon">
                                                            <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon remove_from_WatchListIcon">
                                                            <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/>
                                                        </svg>
                                                        <p style=" display: none !important;" class="add_to_WatchListText"></p>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox openAddToPLBtn" title="Add to Playlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                            <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="slideCardIcon">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/KaguyaSama.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/17.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Kaguya Sama</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                                <div class="cardAddToListBox">
                                                    <div class="cardAddToListIconBox">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="cardAddToListIcon plusIcon">
                                                            <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/>
                                                        </svg>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox add_to_WatchListBox" title="Add to watchlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon add_to_WatchListIcon cardAddToListIcon">
                                                            <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon remove_from_WatchListIcon">
                                                            <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/>
                                                        </svg>
                                                        <p style=" display: none !important;" class="add_to_WatchListText"></p>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox openAddToPLBtn" title="Add to Playlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                            <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="slideCardIcon">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/Kakegurui.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/7.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Kakegurui</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                                <div class="cardAddToListBox">
                                                    <div class="cardAddToListIconBox">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="cardAddToListIcon plusIcon">
                                                            <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/>
                                                        </svg>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox add_to_WatchListBox" title="Add to watchlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon add_to_WatchListIcon cardAddToListIcon">
                                                            <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon remove_from_WatchListIcon">
                                                            <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/>
                                                        </svg>
                                                        <p style=" display: none !important;" class="add_to_WatchListText"></p>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox openAddToPLBtn" title="Add to Playlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                            <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="slideCardIcon">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/ThatIRecentlyGotReincarnatedAsASlime.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/19.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">That I recently got Reincarnated as a Slime</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                                <div class="cardAddToListBox">
                                                    <div class="cardAddToListIconBox">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="cardAddToListIcon plusIcon">
                                                            <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/>
                                                        </svg>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox add_to_WatchListBox" title="Add to watchlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon add_to_WatchListIcon cardAddToListIcon">
                                                            <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon remove_from_WatchListIcon">
                                                            <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/>
                                                        </svg>
                                                        <p style=" display: none !important;" class="add_to_WatchListText"></p>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox openAddToPLBtn" title="Add to Playlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                            <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="slideCardIcon">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/RisingoftheShieldHero.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/20.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Rising of the Shield Hero</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                                <div class="cardAddToListBox">
                                                    <div class="cardAddToListIconBox">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="cardAddToListIcon plusIcon">
                                                            <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/>
                                                        </svg>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox add_to_WatchListBox" title="Add to watchlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon add_to_WatchListIcon cardAddToListIcon">
                                                            <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon remove_from_WatchListIcon">
                                                            <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/>
                                                        </svg>
                                                        <p style=" display: none !important;" class="add_to_WatchListText"></p>
                                                    </div>
                                                    <div class="cardAddToListIconBox hiddenIconBox openAddToPLBtn" title="Add to Playlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                            <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="slideCardIcon">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                        </div>
                        <div class="basic_slide_arrow right_slide_arrow">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="basic_slide_arrowIcon basic_icon_Right">
                                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>


            <!-- ------- NEWS ------- -->
            <div class="type1_Ctnt_bdr">
                <div class="type1_Ctnt_box">
                    <div class="type1_Ctnt_boxHead">
                        <div class="type1_Ctnt_box_HeadLeft">
                            <h1>
                                <span class="firsttxt">U</span>
                                <span class="secondtxt">vid News</span>
                            </h1>
                        </div>
                        <div class="type1_Ctnt_box_HeadRight">
                            <a href="#" class="seeAll">See All ›</a>
                        </div>
                    </div>
                    <div class="news_grid">
                        <div class="news_gridSect">
                            <div class="news_Ctnt">
                                <a href="#" class="news_card type1_ctntCard">
                                    <div class="news_cardImgBox">
                                        <img src="/Library/Images/other_images/Anime_images/chainsawman4.jpg" alt="Image of a news" class="news_cardImg">
                                        <div class="type1_ctntImg_hover">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="type1_ctntImg_hoverIcon" viewBox="0 0 512 512">
                                                <path d="M464 48c-67.61.29-117.87 9.6-154.24 25.69-27.14 12-37.76 21.08-37.76 51.84V448c41.57-37.5 78.46-48 224-48V48zM48 48c67.61.29 117.87 9.6 154.24 25.69 27.14 12 37.76 21.08 37.76 51.84V448c-41.57-37.5-78.46-48-224-48V48z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="news_cardDet">
                                        <div class="news_cardTitleBox">
                                            <h3 class="news_cardTitle">Chainsaw Becoming one of the most watched Anime</h3>
                                        </div>
                                        <div class="news_cardPostBox">
                                            <h5 class="news_cardPost">19th March 2024</h5>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" class="news_card type1_ctntCard">
                                    <div class="news_cardImgBox">
                                        <img src="/Library/Images/other_images/Anime_images/ASignOFAffection.jpg" alt="Image of a news" class="news_cardImg">
                                        <div class="type1_ctntImg_hover">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="type1_ctntImg_hoverIcon" viewBox="0 0 512 512">
                                                <path d="M464 48c-67.61.29-117.87 9.6-154.24 25.69-27.14 12-37.76 21.08-37.76 51.84V448c41.57-37.5 78.46-48 224-48V48zM48 48c67.61.29 117.87 9.6 154.24 25.69 27.14 12 37.76 21.08 37.76 51.84V448c-41.57-37.5-78.46-48-224-48V48z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="news_cardDet">
                                        <div class="news_cardTitleBox">
                                            <h3 class="news_cardTitle">"Anime hits on a differrent level.."</h3>
                                        </div>
                                        <div class="news_cardPostBox">
                                            <h5 class="news_cardPost">14th February 2024</h5>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" class="news_card type1_ctntCard">
                                    <div class="news_cardImgBox">
                                        <img src="/Library/Images/other_images/Anime_images/DemonSlayer_RoarOfVictory.jpg" alt="Image of a news" class="news_cardImg">
                                        <div class="type1_ctntImg_hover">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="type1_ctntImg_hoverIcon" viewBox="0 0 512 512">
                                                <path d="M464 48c-67.61.29-117.87 9.6-154.24 25.69-27.14 12-37.76 21.08-37.76 51.84V448c41.57-37.5 78.46-48 224-48V48zM48 48c67.61.29 117.87 9.6 154.24 25.69 27.14 12 37.76 21.08 37.76 51.84V448c-41.57-37.5-78.46-48-224-48V48z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="news_cardDet">
                                        <div class="news_cardTitleBox">
                                            <h3 class="news_cardTitle">Watch Demon Slayer Roar of Victory in theatres</h3>
                                        </div>
                                        <div class="news_cardPostBox">
                                            <h5 class="news_cardPost">2nd February 2024</h5>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" class="news_card type1_ctntCard">
                                    <div class="news_cardImgBox">
                                        <img src="/Library/Images/other_images/Anime_images/Goku.jpg" alt="Image of a news" class="news_cardImg">
                                        <div class="type1_ctntImg_hover">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="type1_ctntImg_hoverIcon" viewBox="0 0 512 512">
                                                <path d="M464 48c-67.61.29-117.87 9.6-154.24 25.69-27.14 12-37.76 21.08-37.76 51.84V448c41.57-37.5 78.46-48 224-48V48zM48 48c67.61.29 117.87 9.6 154.24 25.69 27.14 12 37.76 21.08 37.76 51.84V448c-41.57-37.5-78.46-48-224-48V48z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="news_cardDet">
                                        <div class="news_cardTitleBox">
                                            <h3 class="news_cardTitle">Goku Never dies? Why?</h3>
                                        </div>
                                        <div class="news_cardPostBox">
                                            <h5 class="news_cardPost">21st January 2024</h5>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" class="news_card type1_ctntCard">
                                    <div class="news_cardImgBox">
                                        <img src="/Library/Images/other_images/Anime_images/MashleMAgicAndMuscle.jpg" alt="Image of a news" class="news_cardImg">
                                        <div class="type1_ctntImg_hover">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="type1_ctntImg_hoverIcon" viewBox="0 0 512 512">
                                                <path d="M464 48c-67.61.29-117.87 9.6-154.24 25.69-27.14 12-37.76 21.08-37.76 51.84V448c41.57-37.5 78.46-48 224-48V48zM48 48c67.61.29 117.87 9.6 154.24 25.69 27.14 12 37.76 21.08 37.76 51.84V448c-41.57-37.5-78.46-48-224-48V48z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="news_cardDet">
                                        <div class="news_cardTitleBox">
                                            <h3 class="news_cardTitle">Anime lineups for the year</h3>
                                        </div>
                                        <div class="news_cardPostBox">
                                            <h5 class="news_cardPost">2nd January 2024</h5>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    `;
    