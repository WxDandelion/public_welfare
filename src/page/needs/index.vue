<style lang="scss">
  @import './index.scss';
</style>

<template>
  <div>
    <div class="needBox">
      <Button type="primary" @click="publish" class="pos_fixed">+发布需求</Button>

      <div class="activity-tripe">
        <form id="activity-search-form" method="post">
          <div class="search-itemlist-box">
            <dl class="search-item-dl" id="search-item-class">
              <dt>分类</dt>
              <div class="search-item-dd-box">
                <dd onclick="classItemClick(this)" val="">全部</dd>
                <dd onclick="classItemClick(this)" val="15805286861818e03887bf421416cb6b681192995714f">疫情防控</dd>
                <dd onclick="classItemClick(this)" val="15306880417639f1b4348c72c49899ab96f324a42e518">脱贫攻坚</dd>
                <input id="category" name="category" type="hidden" onchange="searchNow()">
              </div>
            </dl>
          </div>
          <div class="search-orderlist-box">
            <input name="search_title" class="all-search-input" id="search-activity-input" onchange="searchNow()" placeholder="搜索活动..." style="width:328px;margin-right:20px;" type="text">
            <button class="all-btn" type="button" style="width:100px;">搜索</button>
            <input style="display:none;">
          </div>
        </form>
        <div class="activity-itemlist-box">
          <div class="activity-item-box" onclick="window.location.href='#'">
            <div class="activity-item-img" style="background-image:url(http://image.zyh365.com/vms/2020/07//1583654851582cac13a16dbbd4937ac8ab0a5261eecba?imageView2/2/w/400/h/300)"></div>
            <h3 class="activity-item-box-h3">志愿活动名称</h3>
            <div class="activity-item-day">
              <span class="activity-item-day-span">报名截止：</span>
              <p class="activity-item-day-p"><i style="width:52.459999999999994%;"></i></p>
              <span class="activity-item-day-span">23天</span>
            </div>
            <p class="activity-item-other"><a class="activity-item-other-city"><abbr title="xx省xx市">xx省xx市</abbr></a><a class="activity-item-other-join">参与人数：0</a><a class="activity-item-other-number">浏览量：6</a></p>
          </div>
          <div class="activity-item-box" onclick="window.location.href='#'">
            <div class="activity-item-img" style="background-image:url(http://image.zyh365.com/vms/2020/07//1583654851582cac13a16dbbd4937ac8ab0a5261eecba?imageView2/2/w/400/h/300)"></div>
            <h3 class="activity-item-box-h3">志愿活动名称</h3>
            <div class="activity-item-day">
              <span class="activity-item-day-span">报名截止：</span>
              <p class="activity-item-day-p"><i style="width:52.459999999999994%;"></i></p>
              <span class="activity-item-day-span">23天</span>
            </div>
            <p class="activity-item-other"><a class="activity-item-other-city"><abbr title="xx省xx市">xx省xx市</abbr></a><a class="activity-item-other-join">参与人数：0</a><a class="activity-item-other-number">浏览量：6</a></p>
          </div>
          <div class="activity-item-box" onclick="window.location.href='#'">
            <div class="activity-item-img" style="background-image:url(http://image.zyh365.com/vms/2020/07//1583654851582cac13a16dbbd4937ac8ab0a5261eecba?imageView2/2/w/400/h/300)"></div>
            <h3 class="activity-item-box-h3">志愿活动名称</h3>
            <div class="activity-item-day">
              <span class="activity-item-day-span">报名截止：</span>
              <p class="activity-item-day-p"><i style="width:52.459999999999994%;"></i></p>
              <span class="activity-item-day-span">23天</span>
            </div>
            <p class="activity-item-other"><a class="activity-item-other-city"><abbr title="xx省xx市">xx省xx市</abbr></a><a class="activity-item-other-join">参与人数：0</a><a class="activity-item-other-number">浏览量：6</a></p>
          </div>
          <div class="activity-item-box" onclick="window.location.href='#'">
            <div class="activity-item-img" style="background-image:url(http://image.zyh365.com/vms/2020/07//1583654851582cac13a16dbbd4937ac8ab0a5261eecba?imageView2/2/w/400/h/300)"></div>
            <h3 class="activity-item-box-h3">志愿活动名称</h3>
            <div class="activity-item-day">
              <span class="activity-item-day-span">报名截止：</span>
              <p class="activity-item-day-p"><i style="width:52.459999999999994%;"></i></p>
              <span class="activity-item-day-span">23天</span>
            </div>
            <p class="activity-item-other"><a class="activity-item-other-city"><abbr title="xx省xx市">xx省xx市</abbr></a><a class="activity-item-other-join">参与人数：0</a><a class="activity-item-other-number">浏览量：6</a></p>
          </div>
          <div class="activity-item-box" onclick="window.location.href='#'">
            <div class="activity-item-img" style="background-image:url(http://image.zyh365.com/vms/2020/07//1583654851582cac13a16dbbd4937ac8ab0a5261eecba?imageView2/2/w/400/h/300)"></div>
            <h3 class="activity-item-box-h3">志愿活动名称</h3>
            <div class="activity-item-day">
              <span class="activity-item-day-span">报名截止：</span>
              <p class="activity-item-day-p"><i style="width:52.459999999999994%;"></i></p>
              <span class="activity-item-day-span">23天</span>
            </div>
            <p class="activity-item-other"><a class="activity-item-other-city"><abbr title="xx省xx市">xx省xx市</abbr></a><a class="activity-item-other-join">参与人数：0</a><a class="activity-item-other-number">浏览量：6</a></p>
          </div>
          <div class="activity-item-box" onclick="window.location.href='#'">
            <div class="activity-item-img" style="background-image:url(http://image.zyh365.com/vms/2020/07//1583654851582cac13a16dbbd4937ac8ab0a5261eecba?imageView2/2/w/400/h/300)"></div>
            <h3 class="activity-item-box-h3">志愿活动名称</h3>
            <div class="activity-item-day">
              <span class="activity-item-day-span">报名截止：</span>
              <p class="activity-item-day-p"><i style="width:52.459999999999994%;"></i></p>
              <span class="activity-item-day-span">23天</span>
            </div>
            <p class="activity-item-other"><a class="activity-item-other-city"><abbr title="xx省xx市">xx省xx市</abbr></a><a class="activity-item-other-join">参与人数：0</a><a class="activity-item-other-number">浏览量：6</a></p>
          </div>
          <div class="activity-item-box" onclick="window.location.href='#'">
            <div class="activity-item-img" style="background-image:url(http://image.zyh365.com/vms/2020/07//1583654851582cac13a16dbbd4937ac8ab0a5261eecba?imageView2/2/w/400/h/300)"></div>
            <h3 class="activity-item-box-h3">志愿活动名称</h3>
            <div class="activity-item-day">
              <span class="activity-item-day-span">报名截止：</span>
              <p class="activity-item-day-p"><i style="width:52.459999999999994%;"></i></p>
              <span class="activity-item-day-span">23天</span>
            </div>
            <p class="activity-item-other"><a class="activity-item-other-city"><abbr title="xx省xx市">xx省xx市</abbr></a><a class="activity-item-other-join">参与人数：0</a><a class="activity-item-other-number">浏览量：6</a></p>
          </div>
          <div class="activity-item-box" onclick="window.location.href='#'">
            <div class="activity-item-img" style="background-image:url(http://image.zyh365.com/vms/2020/07//1583654851582cac13a16dbbd4937ac8ab0a5261eecba?imageView2/2/w/400/h/300)"></div>
            <h3 class="activity-item-box-h3">志愿活动名称</h3>
            <div class="activity-item-day">
              <span class="activity-item-day-span">报名截止：</span>
              <p class="activity-item-day-p"><i style="width:52.459999999999994%;"></i></p>
              <span class="activity-item-day-span">23天</span>
            </div>
            <p class="activity-item-other"><a class="activity-item-other-city"><abbr title="xx省xx市">xx省xx市</abbr></a><a class="activity-item-other-join">参与人数：0</a><a class="activity-item-other-number">浏览量：6</a></p>
          </div>
          <div class="activity-item-box" onclick="window.location.href='#'">
            <div class="activity-item-img" style="background-image:url(http://image.zyh365.com/vms/2020/07//1583654851582cac13a16dbbd4937ac8ab0a5261eecba?imageView2/2/w/400/h/300)"></div>
            <h3 class="activity-item-box-h3">志愿活动名称</h3>
            <div class="activity-item-day">
              <span class="activity-item-day-span">报名截止：</span>
              <p class="activity-item-day-p"><i style="width:52.459999999999994%;"></i></p>
              <span class="activity-item-day-span">23天</span>
            </div>
            <p class="activity-item-other"><a class="activity-item-other-city"><abbr title="xx省xx市">xx省xx市</abbr></a><a class="activity-item-other-join">参与人数：0</a><a class="activity-item-other-number">浏览量：6</a></p>
          </div>
        </div>
      </div>
      <needPublish></needPublish>
    </div>
  </div>
</template>
<script>
  import needPublish from '@/components/needPublish';
  export default {
    name: 'needs',
    components: {
      needPublish
    },
    methods:{
      publish() {
        this.$router.push('/needPublish');
      }},
    props: {},
    data () {
      return {}
    }
  }

</script>
