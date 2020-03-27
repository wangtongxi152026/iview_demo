<template>
  <Card class="card-content" :bordered="false">
    <Row type="flex" justify="center" class="code-row-bg">
      <div>
        <Icon class="faile-icon" type="md-close-circle" />

        <p class="result-title">提交失败</p>
        <p class="sub-title">请核对并修改以下信息后，再重新提交。</p>
      </div>
    </Row>
    <Divider style="marginBottom: 32" />
    <Row type="flex" justify="center" class="code-row-bg content-bgc">
      <Col span="24" class="header">您提交的内容有如下错误：</Col>

      <Col span="24" class="margin-bottom">
        <Icon class="small-faile-icon" type="ios-close-circle-outline" />
        <span>您的账户已被冻结</span>
        <span class="tip">立即解冻</span>
        <Icon class="arrow-size" type="ios-arrow-forward" />
      </Col>

      <Col span="24" class="margin-bottom">
        <Icon class="small-faile-icon" type="ios-close-circle-outline" />
        <span>您的账户还不具备申请资格</span>
        <span class="tip">立即解冻</span>
        <Icon class="arrow-size" type="ios-arrow-forward" />
      </Col>
    </Row>

    <Row type="flex" justify="center" class="code-row-bg">
      <Button class="margin-right" type="primary">返回修改</Button>
    </Row>
  </Card>
</template>

<style lang='less' scoped>
.card-content {
  padding: 10px 50px 50px 50px;
}
.faile-icon {
  width: 100%;
  text-align: center;
  color: rgb(255, 80, 81);
  font-size: 100px;
  margin-bottom: 15px;
}
.small-faile-icon {
  color: red;
  font-size: 18px;
  font-weight: 600;
  vertical-align: top;
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
  margin-bottom: 15px;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
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
  padding: 20px;
}
.tip {
  cursor: pointer;
  color: #40a9ff;
  padding: 0 5px 0 20px;
}
.arrow-size {
  font-size: 20px;
  cursor: pointer;
  color: #40a9ff;
  vertical-align: top;
}
.margin-bottom {
  margin-top: 25px;
}
</style>