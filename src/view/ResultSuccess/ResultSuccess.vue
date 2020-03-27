<template>
  <Card class="card-content" :bordered="false">
    <Row type="flex" justify="center" class="code-row-bg">
      <div>
        <Icon class="success-icon" type="ios-checkmark-circle" />
        <p class="result-title">提交成功</p>
        <p
          class="sub-title"
        >提交结果页用于反馈一系列操作任务的处理结果， 如果仅是简单操作，使用 Message 全局提示反馈即可。 本文字区域可以展示简单的补充说明，如果有类似展示 “单据”的需求，下面这个灰色区域可以呈现比较复杂的内容</p>
      </div>
    </Row>
    <Divider style="marginBottom: 32" />
    <Row class="code-row-bg content-bgc" type="flex" justify="center">
      <Col span="24" class="header">项目名称</Col>
      <Col span="8">项目 ID:23421</Col>
      <Col span="8">负责人:曲丽丽</Col>
      <Col span="8">生效时间:2016-12-12 ~ 2017-12-12</Col>
      <Col span="20" class="step-content">
        <Steps :current="1">
          <Step title="创建项目" content="曲丽丽"></Step>
          <Step title="部门初审" content="周毛毛"></Step>
          <Step title="财务复核"></Step>
          <Step title="完成"></Step>
        </Steps>
      </Col>
      <Col span="5" class="icon-color-no-pointer">
        <Icon type="ios-megaphone" />
        <span>2016-12-12 12:32</span>
      </Col>
      <Col class="icon-color" span="7">
        <Icon type="ios-megaphone" />
        <span>催一下</span>
      </Col>
      <Col span="7"></Col>
    </Row>

    <Row type="flex" justify="center" class="code-row-bg">
      <Button class="margin-right" type="primary">返回列表</Button>
      <Button class="margin-right">查看项目</Button>
      <Button class="margin-right">打印</Button>
    </Row>
  </Card>
</template>

<style   scoped>
.card-content {
  padding: 10px 50px 50px 50px;
}
.success-icon {
  width: 100%;
  text-align: center;
  color: rgb(73, 187, 73);
  font-size: 100px;
  margin-bottom: 15px;
}
.result-title {
  text-align: center;
  font-size: 28px;
  margin-bottom: 10px;
}
.sub-title {
  text-align: center;
}
.header {
  color: #000;
  margin: 20px 0;
  font-weight: 600;
  font-size: 18px;
}
.step-content {
  margin: 40px 0 20px 0;
}
.margin-right {
  margin-right: 10px;
}
.icon-color {
  color: #40a9ff;
  cursor: pointer;
}
.icon-color-no-pointer {
  color: #40a9ff;
  cursor: default;
}
.code-row-bg {
  margin-top: 50px;
}
.content-bgc {
  background-color: #fafafa;
}
</style>