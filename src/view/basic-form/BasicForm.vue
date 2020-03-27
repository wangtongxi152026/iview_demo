<template>
  <Card :bordered="false">
    <Row slot="title">
      <p>基础表单页</p>
    </Row>
    <Row type="flex" justify="center" class="code-row-bg">
      <Col :sm="24" :md="12">
        <Form :model="formItem" :label-width="120">
          <FormItem label="标题：">
            <Input v-model="formItem.input" placeholder="给项目起个名字"></Input>
          </FormItem>

          <FormItem label="起止日期：">
            <DatePicker
              type="datetimerange"
              format="yyyy-MM-dd"
              placeholder="选择日期区间"
              style="width: 100%"
            ></DatePicker>
          </FormItem>

          <FormItem label="目标描述：">
            <Input
              v-model="textarea"
              type="textarea"
              :autosize="{minRows: 5,maxRows: 5}"
              placeholder="请输入您的阶段性工作目标"
            ></Input>
          </FormItem>
          <FormItem label="衡量标准：">
            <Input
              v-model="textarea"
              type="textarea"
              :autosize="{minRows: 5,maxRows: 5}"
              placeholder="请输入您的衡量标准"
            ></Input>
          </FormItem>

          <FormItem label="客服（选填）：">
            <Input v-model="formItem.input" placeholder="请描述你服务的客户，内部客户直接 @姓名／工号"></Input>
          </FormItem>

          <FormItem label="邀评人（选填）：">
            <Input v-model="formItem.input" placeholder="请直接 @姓名／工号，最多可邀请 5 人"></Input>
          </FormItem>

          <FormItem label="权重（选填）：">
            <Input v-model="formItem.input" style="width:100px" placeholder="请输入"></Input>
            <span style="padding-left:10px">%</span>
          </FormItem>

          <FormItem label="目标公开：">
            <RadioGroup v-model="RadioValue">
              <Radio label="公开"></Radio>
              <Radio label="部分公开"></Radio>
              <Radio label="不公开"></Radio>
              <div>
                <Select
                  mode="Select"
                  placeholder="公开给:"
                  style="margin: '8px 0'"
                  :class="showPublicUsers? 'block' : 'none'"
                >
                  <Option value="同事甲">同事甲</Option>
                  <Option value="同事乙">同事乙</Option>
                  <Option value="同事丙">同事丙</Option>
                </Select>
                <span>客户、邀评人默认被分享</span>
              </div>
            </RadioGroup>
          </FormItem>
          <Row style="margin-top:20px" type="flex" justify="center" class="code-row-bg">
            <Button style="margin-right:20px" type="primary">提交</Button>
            <Button>保存</Button>
          </Row>
        </Form>
      </Col>
    </Row>
  </Card>
</template>


<script>
export default {
  data () {
    return {
      RadioValue: '公开',
      showPublicUsers: false,
      Select: '',

      formItem: {
        input: '',
        select: '',
        textarea: '',

      }
    }
  },
  watch: {
    RadioValue () {
      if (this.RadioValue === '部分公开') {
        this.showPublicUsers = true
      } else {
        this.showPublicUsers = false
      }
    }
  },
}
</script>

<style lang="less" scoped>
.block {
  display: block;
}
.none {
  display: none;
}
</style>