<template>
  <div class="container-center-horizontal">
    <div class="home-v2 screen">
      <div id="workshires-header">
        <div class="headers">
          <HEADERRIGHT :becomeASeller="hEADER9Props.becomeASeller" :signIn="hEADER9Props.signIn"
            :join="hEADER9Props.join" />
          <div class="header-select-group">
            <Downfilter :Marketplace="downfilterProps.Marketplace"
              :ArtificialIntelligence="downfilterProps.ArtificialIntelligence" :CryptoTool="downfilterProps.CyberTools"
              :group1="downfilterProps.group1" :group2="downfilterProps.group2" :group3="downfilterProps.group3" />
          </div>
          <div class="header-search-input">
            <img class="loupe-1"
              src="https://anima-uploads.s3.amazonaws.com/projects/63f53caea1ccc056ea5a0736/releases/63fb6b8f1cfafcd3e751358c/img/loupe-1-1.svg"
              alt="loupe 1" />
            <input type="text" class="what-are-you-looking-for dmsans-normal-log-cabin-15px" v-model="searchStr"
              @input="getLength" placeholder="whatAreYouLookingFor" />
          </div>
          <HEADERSEARCH :parentmessage="searchString" />
          <img class="workshires-1" :src="workshires1" alt="workshires logo" onClick="alert('I am logo')" />
          <img class="header_cart_icon" :src="header_cart_Icon" alt="cart_icon" />
          <img class="menu-2"
            src="https://anima-uploads.s3.amazonaws.com/projects/63f53caea1ccc056ea5a0736/releases/63fb6b8f1cfafcd3e751358c/img/menu-2.svg"
            alt="menu 2" />
        </div>
        <div class="workshir-nav">
          <div class="nav">
            <img class="icon-home"
              src="https://anima-uploads.s3.amazonaws.com/projects/63f53caea1ccc056ea5a0736/releases/63f5ddc5a8608e9fbd583db0/img/material-symbols-home-rounded.svg"
              alt="icon-home" />
            <div class="navcaption">
              <span v-for="caption in navDataProps.navCatption"
                class="nav-item dmsans-normal-log-cabin-14px nav-hover-anim" @click="shownav(caption)">{{ caption
                }}</span>
            </div>
          </div>
        </div>
      </div>
      <div id="workshire-body" class="workshire-body">
        <div class="search-group">
          <div class="slider" :style="{ 'background-image': 'url(' + slider + ')' }">
            <div class="txt">
              <h1 class="find-the-perfect-fre dmsans-bold-concrete-45px">
                <span class="dmsans-bold-concrete-45px">{{ spanText3 }}</span>
                <br />
                <span class="dmsans-bold-concrete-45px">{{ spanText4 }}</span>
              </h1>
              <p class="work-with-talented-p">{{ workWithTalentedP }}</p>
            </div>
            <div class="search">
              <div class="trend-search">
                <img class="loupe-1"
                  src="https://anima-uploads.s3.amazonaws.com/projects/63f53caea1ccc056ea5a0736/releases/63fb6b8f1cfafcd3e751358c/img/loupe-1.svg"
                  alt="loupe 1" />
                <input type="text" class="what-are-you-looking-for-large dmsans-medium-log-cabin-20px"
                  v-model="searchStrlarge" @input="getSearch" placeholder="whatAreYouLookingFor" />
              </div>
              <div class="rectangle-7"></div>
              <ButtonsLargeOne :className="buttonsOneProps.className" :parentmessage="searchStringlarge" />
            </div>
          </div>
          <div class="trend dmsans-normal-white-15px">
            <div class="popular-searches">{{ popularSearches }}</div>
            <div class="tags">
              <div class="search-frame" @click="prss_design">
                <div class="designer">{{ designer }}</div>
              </div>
              <div class="search-frame" @click="prss_dev">
                <div class="developer">{{ developer }}</div>
              </div>
              <div class="search-frame" @click="prss_web">
                <div class="web">{{ web }}</div>
              </div>
              <div class="search-frame" @click="prss_ios">
                <div class="ios">{{ ios }}</div>
              </div>
              <div class="search-frame" @click="prss_php">
                <div class="price">{{ price }}</div>
              </div>
              <div class="search-frame" @click="prss_senior">
                <div class="senior">{{ senior }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="show-detail">
          <div class="content">
            <div class="why">
              <div class="head">
                <div class="need-something-done abrilfatface-normal-log-cabin-42px">
                  {{ needSomethingDone }}
                </div>
                <p class="most-viewed-and-all dmsans-normal-log-cabin-15px">
                  {{ mostViewedAndAll1 }}
                </p>
              </div>
              <div class="inner">
                <div v-for="item in presentationprops.items">
                  <Description :picture="item.picture" :title="item.title" :description="item.description" />
                </div>
              </div>
            </div>
            <div class="trending">
              <div class="flex-row">
                <div class="head-1">
                  <div class="discover-services dmsans-bold-log-cabin-32px">
                    {{ discoverServices }}
                  </div>
                  <p class="most-viewed-and-all-1 dmsans-normal-log-cabin-15px">
                    {{ mostViewedAndAll2 }}
                  </p>
                </div>
                <div class="tabs">
                  <div class="x1-2">
                    <div class="development-it">{{ developmentIt1 }}</div>
                  </div>
                  <div class="tabs-item">
                    <div class="design-creative dmsans-medium-log-cabin-14px">
                      {{ designCreative1 }}
                    </div>
                  </div>
                  <div class="overlap-group9">
                    <div class="x3">
                      <div class="digital-marketing dmsans-medium-log-cabin-14px">
                        {{ digitalMarketing1 }}
                      </div>
                    </div>
                    <div class="x4">
                      <div class="music-audio dmsans-medium-log-cabin-14px">
                        {{ musicAudio1 }}
                      </div>
                    </div>
                  </div>
                  <div class="tabs-item">
                    <div class="video-animation dmsans-medium-log-cabin-14px">
                      {{ videoAnimation }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="body-service">
                <div class="grid">
                  <div v-for="item in serviceprops.items">
                    <Service :name="item.name" :figure="item.figure"
                      :rating="item.rating" :budget="item.budget" 
                      :picture="item.picture" :title="item.title" 
                      :description="item.description" />
                  </div>
                </div>
              </div>
              <buttons-arrow :shopNow="buttonsArrow1Props.shopNow" />
            </div>
            <div class="contact">
              <div class="inner-1">
                <div class="head-2">
                  <div class="for-clients">{{ forClients }}</div>
                  <div class="find-talent-your-way abrilfatface-normal-log-cabin-42px">
                    {{ findTalentYourWay }}
                  </div>
                </div>
                <p class="work-with-the-larges dmsans-normal-log-cabin-15px">
                  {{ workWithTheLarges }}
                </p>
                <buttons-arrow2 :shopNow="buttonsArrow2Props.shopNow" />
              </div>
              <div class="overlap-group10">
                <div class="images">
                  <img class="rectangle-11" :src="rectangle11" alt="Rectangle 11" /><img class="pretty-girl-profile"
                    :src="prettyGirlProfileViewWomanLookingCo"
                    alt="pretty-girl-profile-view-woman-looking-copy-space-ahead-thinking-imagining-daydreaming 1" />
                </div>
                <div class="box">
                  <div class="overlap-group-container">
                    <div class="overlap-group">
                      <img class="vector"
                        src="https://anima-uploads.s3.amazonaws.com/projects/63f53caea1ccc056ea5a0736/releases/63f53e67d7934a9d7b23a680/img/vector-8.svg"
                        alt="Vector" />
                    </div>
                    <div class="overlap-group">
                      <img class="vector"
                        src="https://anima-uploads.s3.amazonaws.com/projects/63f53caea1ccc056ea5a0736/releases/63f53e67d7934a9d7b23a680/img/vector-8.svg"
                        alt="Vector" />
                    </div>
                    <div class="overlap-group">
                      <img class="vector"
                        src="https://anima-uploads.s3.amazonaws.com/projects/63f53caea1ccc056ea5a0736/releases/63f53e67d7934a9d7b23a680/img/vector-8.svg"
                        alt="Vector" />
                    </div>
                    <div class="overlap-group">
                      <img class="vector"
                        src="https://anima-uploads.s3.amazonaws.com/projects/63f53caea1ccc056ea5a0736/releases/63f53e67d7934a9d7b23a680/img/vector-8.svg"
                        alt="Vector" />
                    </div>
                  </div>
                  <div class="flex-col dmsans-medium-white-15px-2">
                    <p class="the-best-for-every-budget">{{ theBestForEveryBudget }}</p>
                    <div class="quality-work-done-quickly">
                      {{ qualityWorkDoneQuickly }}
                    </div>
                    <div class="protected-payments-every-time">
                      {{ protectedPaymentsEveryTime }}
                    </div>
                    <div class="x247-support">{{ x247Support }}</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="logo-bar">
              <p class="trusted-by-the-worlds-best dmsans-normal-log-cabin-15px">
                {{ trustedByTheWorldsBest }}
              </p>
              <img class="inner-2" :src="inner" alt="inner" />
            </div>
            <div class="category">
              <div class="flex-row-1">
                <div class="head-3">
                  <div class="browse-talent-by-category dmsans-bold-log-cabin-32px">
                    {{ browseTalentByCategory }}
                  </div>
                  <p class="get-some-inspirations-from-1800-skills dmsans-normal-log-cabin-15px">
                    {{ getSomeInspirationsFrom1800Skills }}
                  </p>
                </div>
                <buttons-arrow :shopNow="buttonsArrow2Props2.shopNow" :className="buttonsArrow2Props2.className" />
              </div>
              <div class="overlap-group11">
                <div class="items-1">
                  <div v-for="item in categoryprops.items">
                    <Category :picture="item.picture" :skill = "item.skill" :major = "item.major" />
                  </div>
                </div>
                <div class="arrow">
                  <arrows-shadow />
                  <arrows-shadow :className="arrowsShadowProps.className" />
                </div>
              </div>
            </div>
            <div class="freelancer">
              <div class="flex-row-2">
                <div class="head-4">
                  <div class="highest-rated-freelancers dmsans-bold-log-cabin-32px">
                    {{ highestRatedFreelancers }}
                  </div>
                  <p class="find-the-right-freel dmsans-normal-log-cabin-15px">
                    {{ findTheRightFreel }}
                  </p>
                </div>
                <buttons-arrow :shopNow="buttonsArrow3Props.shopNow" :className="buttonsArrow3Props.className" />
              </div>
              <div class="profile">
                <div v-for="item in profiledetailsprops.items">
                  <CardProfile :figure="item.figure" :status_className="item.status_className" :name="item.name" :job="item.job" :rating="item.rating" :review="item.review" :buttonsArrow="item.button" />
                </div>
              </div>
              <arrow-bullet />
            </div>
            <div class="overlap-group12">
              <div class="say-box">
                <div class="x1-3">
                  <div class="overlap-group-3">
                    <img class="image"
                      src="https://anima-uploads.s3.amazonaws.com/projects/63f53caea1ccc056ea5a0736/releases/63fb6b8f1cfafcd3e751358c/img/-.svg"
                      alt="image" />
                    <div class="great-work">{{ greatWork }}</div>
                  </div>
                  <p class="people-love-our-log dmsans-medium-log-cabin-20px">
                    {{ peopleLoveOurLog }}
                  </p>
                  <div class="bottom-head">
                    <div class="rectangle-228"></div>
                    <div class="flex-row-3">
                      <div class="img">
                        <img class="ellipse-60" :src="ellipse60" alt="Ellipse 60" /><img
                          class="young-woman-working-from-home-1" :src="youngWomanWorkingFromHome1"
                          alt="young-woman-working-from-home 1" />
                      </div>
                      <div class="info">
                        <div class="name dmsans-medium-log-cabin-15px">{{ name }}</div>
                        <div class="web-designer dmsans-normal-nevada-14px">
                          {{ webDesigner }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <arrow-bullet :className="arrowBulletProps.className" />
              </div>
              <div class="inner-8">
                <div class="head-5">
                  <p class="up-your-work-game-its-free abrilfatface-normal-log-cabin-42px">
                    <span class="abrilfatface-normal-log-cabin-42px">{{ spanText9 }}</span><span
                      class="dmsans-bold-log-cabin-32px">{{ spanText10 }}</span>
                  </p>
                  <p class="upgrade-to-a-curated dmsans-normal-log-cabin-15px">
                    {{ upgradeToACurated }}
                  </p>
                </div>
                <div class="text">
                  <x13 :text5="x131Props.text5" :clientsRateProfessionalsOnFreeio="
                    x131Props.clientsRateProfessionalsOnFreeio
                  " />
                  <x13 :text5="x132Props.text5" :clientsRateProfessionalsOnFreeio="
                    x132Props.clientsRateProfessionalsOnFreeio
                  " :className="x132Props.className" />
                  <x13 :text5="x133Props.text5" :clientsRateProfessionalsOnFreeio="
                    x133Props.clientsRateProfessionalsOnFreeio
                  " :className="x133Props.className" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="workshire-foot" class="foot">
        <div class="foot-contents">
          <div class="foot-nav">
            <div class="foot-contact">
              <span v-for="label in footnavProps.footCatption" class="foot-caption foot-caption-items-link">
                {{ label }}
              </span>
            </div>
            <div class="foot-link">
              <span class="foot-caption foot-caption-items">
                Follow Us
              </span>
              <div class="foot-image-link">
                <img class="foot-item-link" src="../../public/image/foot-f.png" />
                <img class="foot-item-link" src="../../public/image/foot-bird-con.png" />
                <img class="foot-item-link-in" src="../../public/image/foot-bird.png" />
                <img class="foot-item-link" src="../../public/image/foot-rec.png" />
                <img class="foot-item-link" src="../../public/image/foot-in.png" />
              </div>
            </div>
          </div>
          <img class="foot-bound" src="../../public/image/foot-bound.png" />
          <div class="foot-detail">
            <div class="foot-detail-item">
              <span class="foot-caption foot-caption-items">
                About
              </span>
              <span class="foot-caption foot-caption-items">
                About
              </span>
              <span class="foot-caption foot-caption-items">
                About
              </span>
              <span class="foot-caption foot-caption-items">
                About
              </span>
              <span class="foot-caption foot-caption-items">
                About
              </span>
            </div>
            <div class="foot-detail-item">
              <span class="foot-caption foot-caption-items">
                About
              </span>
              <span class="foot-caption foot-caption-items">
                About
              </span>
              <span class="foot-caption foot-caption-items">
                About
              </span>
              <span class="foot-caption foot-caption-items">
                About
              </span>
              <span class="foot-caption foot-caption-items">
                About
              </span>
            </div>
            <div class="foot-detail-item">
              <span class="foot-caption foot-caption-items">
                About
              </span>
              <span class="foot-caption foot-caption-items">
                About
              </span>
              <span class="foot-caption foot-caption-items">
                About
              </span>
              <span class="foot-caption foot-caption-items">
                About
              </span>
            </div>
            <div class="foot-detail-item">
              <span class="foot-caption foot-caption-items">
                Subscribe
              </span>
              <div class="foot-to-email">
                <input type="text" class="send-to-email " v-model="sendStr" @input="getStr"
                  placeholder="Your email address" />
                <span class="foot-to-client">Send</span>
              </div>
              <span class="foot-caption foot-caption-items foot-declime">
                Apps
              </span>
              <div class="foot-apps">
                <img class="foot-icon" src="../../public/image/iOS App.png" />
                <span class="foot-caption foot-caption-items">
                  iOS App
                </span>
              </div>
              <div class="foot-apps">
                <img class="foot-icon" src="../../public/image/android.png" />
                <span class="foot-caption foot-caption-items">
                  Android App
                </span>
              </div>

            </div>
          </div>
          <img class="foot-bound" src="../../public/image/foot-bound.png" />
          <div class="foot-assist">
            <img class="foot-last" src="../../public/image/foot-last-left.png" />
            <div class="foot-select">
              <FootDownfilter :Marketplace="footlastProps.US$USD" :ArtificialIntelligence="footlastProps.English"
                :group1="footlastProps.group1" :group2="footlastProps.group2" />
            </div>
          </div>
        </div>
      </div>
      <!-- <footer1 v-bind="fOOTER1Props" /> -->
    </div>
  </div>
</template>

<script>
import HEADERRIGHT from "./HEADER9";
import Downfilter from "./Downfilter.vue";
import FootDownfilter from "./FootDownfilter.vue";
import HEADERSEARCH from "./ButtonsOne.vue";
import ButtonsLargeOne from "./ButtonsLargeOne";
import Description from "./Description";
import StyleV2 from "./StyleV2";
import StyleV22 from "./StyleV22";
import ButtonsArrow from "./ButtonsArrow";
import ButtonsArrow2 from "./ButtonsArrow2";
import Category  from "./Category";
import ArrowsShadow from "./ArrowsShadow";
import StyleV1 from "./StyleV1";
import X2 from "./X2";
import X3 from "./X3";
import StyleV12 from "./StyleV12";
import CardProfile from "./CardProfile";
import Service from "./service.vue"
import ArrowBullet from "./ArrowBullet";
import X13 from "./X13";
import FOOTER1 from "./FOOTER1";
export default {
  name: "HomeV2",
  components: {
    HEADERRIGHT,
    Downfilter,
    FootDownfilter,
    HEADERSEARCH,
    CardProfile,
    Service,
    ButtonsLargeOne,
    Description,
    StyleV2,
    StyleV22,
    ButtonsArrow,
    ButtonsArrow2,
    Category,
    ArrowsShadow,
    StyleV1,
    X2,
    X3,
    StyleV12,
    ArrowBullet,
    X13
    // FOOTER1,
  },
  props: [
    "categoryprops",
    "presentationprops",
    "serviceprops",
    "profiledetailsprops",
    "navDataProps",
    "downfilterProps",
    "Marketplace",
    "footnavProps",
    "footlastProps",
    "group1",
    "spanText1",
    "spanText2",
    "buttonsOneProps",
    "group2",
    "footdetailProps",
    "whatAreYouLookingFor1",
    "workshires1",
    "header_cart_Icon",
    "slider",
    "spanText3",
    "spanText4",
    "spanText5",
    "workWithTalentedP",
    "whatAreYouLookingFor2",
    "popularSearches",
    "designer",
    "developer",
    "web",
    "ios",
    "price",
    "senior",
    "needSomethingDone",
    "mostViewedAndAll1",
    "chooseFreelancers",
    "spanText7",
    "spanText8",
    "discoverServices",
    "mostViewedAndAll2",
    "developmentIt1",
    "designCreative1",
    "digitalMarketing1",
    "musicAudio1",
    "videoAnimation",
    "forClients",
    "findTalentYourWay",
    "workWithTheLarges",
    "rectangle11",
    "prettyGirlProfileViewWomanLookingCo",
    "theBestForEveryBudget",
    "qualityWorkDoneQuickly",
    "protectedPaymentsEveryTime",
    "x247Support",
    "trustedByTheWorldsBest",
    "inner",
    "browseTalentByCategory",
    "getSomeInspirationsFrom1800Skills",
    "x1853Skills1",
    "developmentIt2",
    "x1853Skills2",
    "designCreative2",
    "x1853Skills3",
    "digitalMarketing2",
    "x1853Skills4",
    "writingTranslation",
    "x1853Skills5",
    "musicAudio2",
    "highestRatedFreelancers",
    "findTheRightFreel",
    "greatWork",
    "peopleLoveOurLog",
    "ellipse60",
    "youngWomanWorkingFromHome1",
    "name",
    "webDesigner",
    "spanText9",
    "spanText10",
    "upgradeToACurated",
    "hEADER9Props",
    "HEADERSEARCHProps",
    "x11Props",
    "x12Props",
    "x13Props",
    "styleV21Props",
    "styleV22Props",
    "styleV22Props2",
    "styleV23Props",
    "styleV24Props",
    "styleV25Props",
    "styleV26Props",
    "styleV27Props",
    "buttonsArrow1Props",
    "buttonsArrow2Props",
    "buttonsArrow2Props2",
    "xImg1Props",
    "xImg2Props",
    "xImg3Props",
    "xImg4Props",
    "xImg5Props",
    "arrowsShadowProps",
    "buttonsArrow3Props",
    "styleV11Props",
    "x31Props",
    "x32Props",
    "styleV12Props",
    "styleV12Props2",
    "styleV13Props",
    "x21Props",
    "x33Props",
    "x34Props",
    "arrowBulletProps",
    "x131Props",
    "x132Props",
    "x133Props",
    "x22Props",
    "x35Props",
    "x36Props",
    "x23Props",
    "x37Props",
    "x38Props",
    // "fOOTER1Props",
  ],
  data() {
    return {
      searchStr: '',
      searchStrlarge: '',
      searchString: '',
      searchStringlarge: '',
      inneritem1checked: true,
      inneritem2checked: true,
      inneritem3checked: true,
      savecheckedflag: true,
      showdetail: false,
      showdetail1: false,
      showdetail2: false,
      showdetail3: false,
      showdetail4: false,
      sendToStr: '',
      sendStr: '',
    }
  },
  methods: {
    getLength: function () {
      this.searchString = this.searchStr;
    },
    getStr: function () {
      this.sendStr = this.sendStr;
    },
    getSearch: function () {
      this.searchStringlarge = this.searchStrlarge;
    },
    shownav(event) {
      alert(event)
    },
    prss_php() {
      alert("php");
    },
    prss_web() {
      alert("web");
    },
    prss_ios() {
      alert("iios");
    },
    prss_senior() {
      alert("Senior");
    },
    prss_dev() {
      alert("php");
    },
    prss_design() {
      alert("prss_design");
    },
    detail() {
      this.showdetail = !(this.showdetail);
    },
    detail1() {
      this.showdetail1 = !(this.showdetail1);
    },
    detail2() {
      this.showdetail2 = !(this.showdetail2);
    },
    detail3() {
      this.showdetail3 = !(this.showdetail3);
    },
    detail4() {
      this.showdetail4 = !(this.showdetail4);
    },
    hereclicked1() {
      this.inneritem1checked = !(this.inneritem1checked);
    },
    hereclicked2() {
      this.inneritem2checked = !(this.inneritem2checked);
    },
    hereclicked3() {
      this.inneritem3checked = !(this.inneritem3checked);
    },
    savechecked() {
      this.savecheckedflag = !(this.savecheckedflag);
    }
  }
};
</script>

<style>
.grid {
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-row-gap: 25px;
  grid-column-gap: 26px;
}

.home-v2 {
  align-items: flex-start;
  background-color: var(--white-2);
  display: flex;
  flex-direction: column;
  height: auto;
  overflow: hidden;
  position: relative;
  width: 1920px;
}

.headers {
  height: 80px;
  position: relative;
  width: 1920px;
}

.foot {
  margin-top: 910px;
  background: linear-gradient(180deg, #130855 0%, #009DFF 100%);
  display: flex;
  min-height: 641px;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: #FFFFFF;
}

.foot-contents {
  width: 73%;
  height: 100%;
  /* border: 1px solid; */
  display: flex;
  flex-direction: column;
}

.foot-caption {
  font-family: var(--font-family-dm_sans);
  font-size: 17px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
}

.foot-contact {
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
}

.foot-link {
  /* border: 1px solid; */
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
}

.foot-declime {
  margin-top: 30px;
}

.foot-bound {
  width: 100%;
}

.foot-item-link {
  margin-right: 30px;
}

.foot-item-link-in {
  position: absolute;
  margin-right: 75px;
}

.foot-image-link {
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  margin-right: 5px;
}

.foot-nav {
  /* border: 1px solid; */
  height: 12%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.foot-caption-items {
  margin-right: 30px;
}

.foot-caption-items-link {
  margin-right: 100px;
}

.foot-detail {
  height: 76%;
  width: full;
  display: flex;
  flex-direction: row;
  margin-top: 8%;
}

.foot-detail-item {
  display: flex;
  flex-direction: column;
  width: 25%;
}

.foot-assist {
  height: 12%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.foot-btn-imutation {
  height: 50%;
  width: 150%;
  background: #FFFFFF;
  opacity: 0.15;
  border-radius: 4px;
}

.foot-last {
  width: 20%;
  height: 20%;
}

.foot-select {
  width: 15%;
  height: 50%;
}

.foot-icon {
  width: 16px;
  height: 16px;
  margin-right: 13px;
}

.foot-to-email {
  height: 10%;
  width: 100%;
  margin-top: 5%;
  background: rgb(25, 67, 147);
  /* opacity: 0.05; */
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.foot-to-client {
  margin-right: 15px;
}

.foot-to-client:hover {
  color: #d5e2eb;
  cursor: pointer;
}

.foot-apps {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
}

.rectangle {
  background: linear-gradient(180deg, rgb(255, 255, 255) 0%, rgb(232, 236, 244) 100%);
  /* border: 1px solid; */
  border-color: var(--white-2);
  border-radius: 100px;
  box-shadow: -4.19px -4.19px 6px #ffffff, inset 4.19px 4.19px 4px #b4c4d359;
  height: 54px;
  left: 316px;
  position: absolute;
  top: 14px;
  width: 650px;
}

.group {
  height: 3px;
  left: 1144px;
  position: absolute;
  top: 40px;
  width: 6px;
}

.header-select-group {
  align-items: center;
  display: flex;
  gap: 2px;
  height: 26px;
  left: 1050px;
  min-width: 279px;
  position: absolute;
  top: 26px;
}

.marketplace-project-freelance {
  color: transparent;
  font-family: var(--font-family-dm_sans);
  font-size: var(--font-size-m);
  font-weight: 700;
  letter-spacing: 0;
  line-height: 28px;
  min-height: 26px;
  white-space: nowrap;
  width: 269px;
}

.span1 {
  color: var(--log-cabin);
}

.vector-1 {
  height: 3px;
  margin-top: 5.09px;
  width: 6px;
}

.group-2 {
  height: 3px;
  left: 1223px;
  position: absolute;
  top: 40px;
  width: 6px;
}

.header-search-input {
  align-items: center;
  display: flex;
  gap: 10px;
  height: 54px;
  left: 316px;
  min-width: 204px;
  width: 650px;
  position: absolute;
  top: 14px;
  background: linear-gradient(0deg, #FFFFFF 8%, #E8ECF4 100%);
  border: 1px solid #FFFFFF;
  box-shadow: -4.19017px -4.19017px 6px #FFFFFF, inset 4.19017px 4.19017px 4px rgba(180, 196, 211, 0.35);
  border-radius: 100px;
}

.loupe-1 {
  height: 16px;
  width: 16px;
  margin-left: 35px;
}

.what-are-you-looking-for {
  letter-spacing: 0;
  line-height: 28px;
  min-width: 176px;
  white-space: nowrap;
  outline: none;
  border-color: white;
  border-width: 0px;
  background-color: transparent;
}

.send-to-email {
  letter-spacing: 0;
  line-height: 28px;
  min-width: 176px;
  white-space: nowrap;
  outline: none;
  border-color: white;
  border-width: 0px;
  margin-left: 15px;
  background-color: transparent;
  opacity: 1;
  color: rgb(244, 246, 248);
}

.what-are-you-looking-for-large {
  letter-spacing: 0;
  line-height: 28px;
  min-width: 176px;
  white-space: nowrap;
  outline: none;
  border-color: white;
  border-width: 0px;
}

.workshires-1 {
  height: 30px;
  left: 38px;
  object-fit: cover;
  position: absolute;
  top: 27px;
  width: 192px;
}

.workshires-1:hover {
  cursor: pointer
}

.text-6 {
  color: #00b2ff;
  font-family: var(--font-family-dm_sans);
  font-size: 30px;
  font-weight: 700;
  left: 232px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 26px;
}

.header_cart_icon {
  height: 23px;
  left: 1530px;
  object-fit: cover;
  position: absolute;
  top: 27px;
  width: 24px;
}

.menu-2 {
  height: 16px;
  left: 1014px;
  position: absolute;
  top: 32px;
  width: 16px;
}

.rectangle-208 {
  background: linear-gradient(180deg, rgb(0, 228, 255) 0%, rgb(22, 87, 243) 85.42%);
  height: 3px;
  left: 1050px;
  position: absolute;
  top: 52px;
  width: 100px;
}

.workshir-nav {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  left: -1px;
  min-height: 52px;
  padding: 1px 260px;
  top: -1px;
  width: 1922px;
}

.overlap-group13 {
  align-items: flex-start;
  background-color: var(--white-2);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: var(--gray-nurse);
  display: flex;
  flex-direction: column;
  gap: 4px;
  left: -1px;
  min-height: 52px;
  padding: 10px 279.6px;
  position: absolute;
  top: -1px;
  width: 1922px;

}

.nav {
  margin-top: 14px;
  display: flex;
  float: left;
  justify-content: center;
  align-items: center;
}

.navcaption {
  display: flex;
  align-items: center;
  justify-content: center;
  float: left;
  gap: 51px;
}

.nav-item {
  margin-top: 3px;
}

.nav-item:hover {
  background: #121FCF;
  background: linear-gradient(to right, #2bcddf 1%, #1657f3 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.nav-hover-anim {
  display: inline-block;
  position: relative;
}

.nav-hover-anim::after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: -5px;
  left: 0;
  cursor: pointer;
  background: linear-gradient(90deg, #00E4FF 1.68%, #1657F3 70.47%);
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.nav-hover-anim:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;

}

.icon-home {
  height: 20px;
  width: 20px;
}

.home-graphics-design {
  height: 13px;
  margin-top: 13px;
  width: 1227px;
}

.rectangle-276 {
  height: 2px;
  margin-left: 235.44px;
  width: 109px;
}

.material-symbolshome-rounded {
  height: 20px;
  left: 254px;
  position: absolute;
  top: 17px;
  width: 20px;
}

.search-group {
  height: 780px;
  margin-top: 2px;
  position: relative;
  width: 1920px;
}

.slider {
  align-items: flex-start;
  background-position: 50% 50%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  gap: 30px;
  left: 0;
  min-height: 780px;
  padding: 199px 260px;
  position: absolute;
  top: 0;
  width: 1920px;
}

.txt {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-height: 194px;
  width: 661px;
}

.find-the-perfect-fre {
  letter-spacing: 0;
  line-height: normal;
  min-height: 118px;
  width: 657px;
}

.span1-1 {
  color: var(--concrete);
  font-family: var(--font-family-abril_fatface);
  font-size: var(--font-size-xxxxl);
  font-weight: 400;
}

.span2 {
  color: var(--concrete);
  font-family: var(--font-family-dm_sans);
  font-size: 50px;
  font-weight: 400;
}

.work-with-talented-p {
  color: var(--concrete);
  font-family: var(--font-family-dm_sans);
  font-size: var(--font-size-m);
  font-weight: 400;
  letter-spacing: 0;
  line-height: 28px;
  min-height: 56px;
  width: 495px;
}

.search {
  align-items: center;
  background-color: white;
  border-radius: 60px;
  box-shadow: 0px 0px 30px #2222220d;
  display: flex;
  height: 80px;
  justify-content: flex-end;
  min-width: 805px;
  padding: 0 9px;
  position: relative;
}

.trend-search {
  align-items: center;
  display: flex;
  gap: 15px;
  height: 28px;
  min-width: 209px;
}

.what-are-you-looking-for-1 {
  letter-spacing: 0;
  line-height: 28px;
  white-space: nowrap;
  width: 176px;
}

.rectangle-7 {
  background-color: var(--concrete);
  height: 40px;
  margin-left: 106px;
  width: 1px;
}

.trend {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 10px;
  left: 260px;
  min-height: 74px;
  position: absolute;
  top: 524px;
  width: 600px;
}

.popular-searches,
.most-viewed-and-all,
.most-viewed-and-all-1,
.the-best-for-every-budget,
.quality-work-done-quickly,
.protected-payments-every-time,
.x247-support,
.get-some-inspirations-from-1800-skills,
.x1853-skills,
.x1853-skills-1,
.x1853-skills-2,
.x1853-skills-3,
.x1853-skills-4,
.name,
.web-designer {
  letter-spacing: 0;
  line-height: 28px;
  white-space: nowrap;
}

.tags {
  align-items: flex-start;
  display: flex;
  gap: 10px;
  height: 36px;
  min-width: 598px;
}

.search-frame {
  align-items: center;
  background-color: var(--white-3);
  border-radius: 60px;
  display: flex;
  gap: 10px;
  justify-content: center;
  padding: 4px 24px;
  position: relative;
  width: fit-content;
}

.search-frame:hover {
  cursor: pointer;
  background-color: #009DFF;
}

.designer,
.developer,
.web,
.ios,
.price,
.senior,
.design-creative,
.digital-marketing,
.music-audio,
.video-animation {
  letter-spacing: 0;
  line-height: 28px;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.show-detail {
  height: 4826px;
  margin-top: 65px;
  position: relative;
  width: 1920px;
}

.content {
  align-items: center;
  display: flex;
  flex-direction: column;
  left: 0;
  min-height: 4826px;
  position: absolute;
  top: 0;
  width: 1920px;
}

.why {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 60px;
  margin-right: 39px;
  min-height: 334px;
  width: 1361px;
}

.head {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-height: 89px;
  width: 437px;
}

.need-something-done {
  letter-spacing: 0;
  line-height: normal;
  min-height: 57px;
}

.inner {
  align-items: flex-start;
  display: flex;
  gap: 63px;
  height: 185px;
  min-width: 1361px;
  position: relative;
}

.x2 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 185px;
  width: 294px;
}

.web-design-1 {
  height: 40px;
  width: 40px;
}

.choose-freelancers {
  letter-spacing: 0;
  line-height: normal;
  margin-top: 20px;
  min-height: 26px;
}

.forget-the-old-rules {
  letter-spacing: 0;
  line-height: 28px;
  margin-top: 15px;
  min-height: 84px;
  width: 290px;
}

.span1-2 {
  text-decoration: underline;
}

.trending {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 60px;
  margin-left: 11px;
  margin-top: 92px;
  min-height: 1209px;
  position: relative;
  width: 1411px;
}

.flex-row {
  align-items: flex-end;
  display: flex;
  gap: 342px;
  height: 75px;
  min-width: 1411px;
}

.head-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 5px;
  min-height: 75px;
  width: 320px;
}

.discover-services,
.browse-talent-by-category,
.highest-rated-freelancers {
  letter-spacing: 0;
  line-height: normal;
  min-height: 42px;
}

.tabs {
  align-items: flex-start;
  display: flex;
  min-width: 749px;
}

.x1-2 {
  align-items: center;
  background-color: var(--white);
  border-radius: 32px;
  box-shadow: -5px -5px 10px #ffffff, 5px 5px 10px #aaaacc80;
  display: flex;
  gap: 10px;
  justify-content: center;
  padding: 6px 17px;
  position: relative;
  width: fit-content;
}

.development-it {
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent;
  background: linear-gradient(180deg, rgb(0, 228, 255) 0%, rgb(22, 87, 243) 85.42%);
  background-clip: text;
  color: transparent;
  font-family: var(--font-family-dm_sans);
  font-size: var(--font-size-s);
  font-weight: 500;
  letter-spacing: 0;
  line-height: 28px;
  margin-top: -1px;
  position: relative;
  text-fill-color: transparent;
  white-space: nowrap;
  width: fit-content;
}

.tabs-item {
  align-items: center;
  background-color: var(--white-2);
  border-radius: 8px;
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-left: 11px;
  padding: 6px 17px;
  position: relative;
  width: fit-content;
}

.overlap-group9 {
  height: 40px;
  position: relative;
  width: 264px;
}

.x3 {
  align-items: center;
  background-color: var(--white-2);
  border-radius: 8px;
  display: flex;
  gap: 10px;
  justify-content: center;
  left: 0;
  padding: 6px 17px;
  position: absolute;
  top: 0;
  width: fit-content;
}

.x4 {
  align-items: center;
  background-color: var(--white-2);
  border-radius: 8px;
  display: flex;
  gap: 10px;
  justify-content: center;
  left: 134px;
  padding: 6px 17px;
  position: absolute;
  top: 0;
  width: fit-content;
}

.body-service {
  align-items: flex-start;
  display: flex;
  gap: 28px;
  height: 954px;
  min-width: 1400px;
}
.a{
  display: flex;
  flex-direction: row;
}
.style-v-container {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 28px;
  min-height: 954px;
  position: relative;
  width: 329px;
}

.contact {
  align-items: center;
  display: flex;
  gap: 228px;
  margin-top: 120px;
  min-width: 1400px;
}

.inner-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 250px;
  position: relative;
  width: 486px;
}

.head-2 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-height: 89px;
  width: 490px;
}

.for-clients {
  color: var(--azure-radiance);
  font-family: var(--font-family-dm_sans);
  font-size: var(--font-size-l);
  font-weight: 500;
  letter-spacing: 0;
  line-height: 28px;
  white-space: nowrap;
}

.find-talent-your-way {
  letter-spacing: 0;
  line-height: normal;
  min-height: 57px;
  width: 486px;
}

.work-with-the-larges {
  letter-spacing: 0;
  line-height: 28px;
  margin-top: 15px;
  min-height: 56px;
  width: 448px;
}

.overlap-group10 {
  height: 706px;
  position: relative;
  width: 686px;
}

.images {
  align-items: flex-end;
  display: flex;
  gap: 1111px;
  height: 706px;
  left: 119px;
  min-width: 567px;
  position: absolute;
  top: 0;
}

.rectangle-11 {
  height: 706px;
  margin-bottom: -2605px;
  margin-left: -1696px;
  width: 567px;
}

.pretty-girl-profile {
  height: 720px;
  margin-bottom: -7px;
  object-fit: cover;
  width: 615px;
}

.box {
  align-items: center;
  background: linear-gradient(180deg, rgb(18.91, 8.15, 85) 0%, rgb(0, 157, 255) 100%);
  border-radius: 16px;
  box-shadow: 10px 10px 40px #2222220d;
  display: flex;
  gap: 13px;
  height: 300px;
  justify-content: flex-end;
  left: 0;
  min-width: 330px;
  padding: 0 31px;
  position: absolute;
  top: 203px;
}

.overlap-group-container {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 35px;
  margin-top: 1px;
  min-height: 205px;
  width: 25px;
}

.overlap-group {
  align-items: flex-end;
  background-color: var(--white-2);
  border-radius: 12.5px;
  display: flex;
  height: 25px;
  min-width: 25px;
  padding: 9.9px 9px;
}

.vector {
  height: 5px;
  width: 7px;
}

.flex-col {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 32px;
  min-height: 208px;
  width: 229px;
}

.logo-bar {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 60px;
  margin-right: 0.6px;
  margin-top: 120px;
  min-height: 130px;
  width: 1399px;
}

.trusted-by-the-worlds-best {
  letter-spacing: 0;
  line-height: 28px;
  margin-left: 0.6px;
  min-width: 188px;
  text-align: center;
  white-space: nowrap;
}

.inner-2 {
  height: 42px;
  width: 1399px;
}

.category {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 60px;
  margin-top: 120px;
  min-height: 435px;
  width: 1450px;
}

.flex-row-1 {
  align-items: flex-end;
  display: flex;
  gap: 806px;
  height: 75px;
  min-width: 1400px;
  position: relative;
}

.head-3 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 5px;
  min-height: 75px;
  width: 409px;
}

.overlap-group11 {
  height: 300px;
  position: relative;
  width: 1450px;
}

.items-1 {
  align-items: flex-start;
  display: flex;
  gap: 25px;
  height: 300px;
  left: 25px;
  min-width: 1400px;
  position: absolute;
  top: 0;
}

.overlap-group-1 {
  height: 300px;
  position: relative;
  width: 260px;
}

.inner-3 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  left: 30px;
  min-height: 84px;
  position: absolute;
  top: 30px;
  width: 134px;
}

.development-it-1,
.design-creative-1,
.digital-marketing-1,
.writing-translation,
.music-audio-1,
.find-the-right-freel {
  letter-spacing: 0;
  line-height: 28px;
  min-height: 56px;
}

.inner-4 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  left: 30px;
  min-height: 84px;
  position: absolute;
  top: 30px;
  width: 80px;
}

.inner-5 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  left: 30px;
  min-height: 84px;
  position: absolute;
  top: 30px;
  width: 84px;
}

.inner-6 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  left: 30px;
  min-height: 84px;
  position: absolute;
  top: 30px;
  width: 93px;
}

.inner-7 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  left: 30px;
  min-height: 84px;
  position: absolute;
  top: 30px;
  width: 76px;
}

.arrow {
  align-items: flex-start;
  display: flex;
  gap: 1350px;
  height: 50px;
  left: 0;
  min-width: 1450px;
  position: absolute;
  top: 125px;
}

.freelancer {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 120px;
  min-height: 679px;
  position: relative;
  width: 1400px;
}

.flex-row-2 {
  align-items: center;
  display: flex;
  gap: 786px;
  height: 103px;
  min-width: 1400px;
  position: relative;
}

.head-4 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 5px;
  min-height: 103px;
  width: 410px;
}

.profile {
  align-items: flex-start;
  display: flex;
  gap: 28px;
  margin-top: 32px;
  min-width: 1400px;
  position: relative;
  justify-content: space-between;
}

.overlap-group-2 {
  border-radius: 16px;
  height: 466px;
  position: relative;
  width: 329px;
}

.overlap-group12 {
  height: 641px;
  margin-top: 120px;
  position: relative;
  width: 100%;
  background: linear-gradient(90deg, #00E4FF 1.68%, #1657F3 70.47%);
  border-radius: 0px;
}

.say-box {
  align-items: flex-end;
  background: rgb(242, 253, 255);
  display: flex;
  flex-direction: column;
  gap: 30px;
  left: 0;
  min-height: 641px;
  padding: 120px 260px;
  position: absolute;
  top: 0;
  width: 1920px;
}

.x1-3 {
  align-items: center;
  background-color: var(--white-2);
  border-radius: 16px;
  box-shadow: 0px 6px 15px #404f680d;
  display: flex;
  flex-direction: column;
  min-height: 347px;
  padding: 29.9px 0;
  width: 430px;
}

.overlap-group-3 {
  height: 35px;
  margin-top: 10px;
  position: relative;
  width: 350px;
}

.image {
  height: 26px;
  left: 313px;
  position: absolute;
  top: 0;
  width: 37px;
}

.great-work {
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent;
  background: linear-gradient(180deg, rgb(18.91, 8.15, 85) 0%, rgb(0, 157, 255) 100%);
  background-clip: text;
  color: transparent;
  font-family: var(--font-family-dm_sans);
  font-size: var(--font-size-xl);
  font-weight: 500;
  left: 0;
  letter-spacing: 0;
  line-height: 35px;
  position: absolute;
  text-fill-color: transparent;
  top: 0;
  white-space: nowrap;
  width: 350px;
}

.people-love-our-log {
  letter-spacing: 0;
  line-height: 35px;
  margin-top: 15px;
  min-height: 70px;
  width: 350px;
}

.bottom-head {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 76px;
  min-height: 81px;
  width: 350px;
}

.rectangle-228 {
  background-color: var(--gray-nurse);
  height: 1px;
  width: 350px;
}

.flex-row-3 {
  align-items: center;
  display: flex;
  gap: 20px;
  min-width: 197px;
}

.img {
  align-items: flex-end;
  display: flex;
  gap: 1636px;
  min-width: 60px;
}

.ellipse-60 {
  height: 60px;
  margin-bottom: -2605px;
  margin-left: -1696px;
  width: 60px;
}

.young-woman-working-from-home-1 {
  height: 60px;
  object-fit: cover;
  width: 60px;
}

.info {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 56px;
  width: 117px;
}

.inner-8 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 9px;
  left: 260px;
  min-height: 269px;
  position: absolute;
  top: 170px;
  width: 863px;
}

.head-5 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 21px;
  min-height: 152px;
  width: 809px;
}

.up-your-work-game-its-free {
  letter-spacing: 0;
  line-height: normal;
  min-height: 47px;
  width: 805px;
}

.upgrade-to-a-curated {
  letter-spacing: 0;
  line-height: 28px;
  min-height: 84px;
  width: 520px;
}

.text {
  align-items: flex-start;
  display: flex;
  height: 108px;
  min-width: 863px;
  position: relative;
}</style>
