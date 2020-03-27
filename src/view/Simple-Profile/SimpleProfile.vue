<template>
  <Card :bordered="false">
    <Row slot="title">
      <p class="title">基础详情页</p>
    </Row>

    <Row class="info">
      <Col span="24" class="sub-title">退款申请</Col>
      <template v-for="item in refundInfo">
        <Col :key="item.info" :sm="12" :md="8" class="text">{{item.info}}</Col>
      </template>
    </Row>

    <Divider style="marginBottom: 32" />
    <Row class="info">
      <Col span="24" class="sub-title">用户信息</Col>
      <template v-for="item in userinfo">
        <Col :key="item.info" :sm="12" :md="8" class="text">{{item.info}}</Col>
      </template>
    </Row>

    <Divider style="marginBottom: 32" />

    <Row class="info">
      <Col span="24" class="sub-title">退货商品</Col>
      <Col span="24">
        <Table :columns="columns1" :data="data1"></Table>
      </Col>
    </Row>

    <Divider style="marginBottom: 32" />
    <Row class="info">
      <Col span="24" class="sub-title">退货进度</Col>
      <Col span="24">
        <Table :columns="columns2" :data="data2"></Table>
      </Col>
    </Row>

    <Divider style="marginBottom: 32" />
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
      },
      columns1: [
        {
          title: '商品编号',
          key: 'id'
        },
        {
          title: '商品名称',
          key: 'name'
        },
        {
          title: '商品条码',
          key: 'barcode'
        },

        {
          title: '单价',
          key: 'price'
        },
        {
          title: '数量（件）',
          key: 'num'
        },
        {
          title: '金额',
          key: 'amount'
        },
      ],
      data1: [
        {
          id: '1234561',
          name: '矿泉水 550ml',
          barcode: '12421432143214321',
          price: '2.00',
          num: '1',
          amount: '2.00',
        },
        {
          id: '1234562',
          name: '凉茶 300ml',
          barcode: '12421432143214322',
          price: '3.00',
          num: '2',
          amount: '6.00',
        },
        {
          id: '1234563',
          name: '好吃的薯片',
          barcode: '12421432143214323',
          price: '7.00',
          num: '4',
          amount: '28.00',
        },
        {
          id: '1234564',
          name: '特别好吃的蛋卷',
          barcode: '12421432143214324',
          price: '8.50',
          num: '3',
          amount: '25.50',
        },
      ],
      columns2: [
        {
          title: '时间',
          key: 'time'
        },
        {
          title: '当前进度',
          key: 'rate'
        },
        {
          title: '状态',
          key: 'status'
        },

        {
          title: '操作员ID',
          key: 'operator'
        },
        {
          title: '耗时',
          key: 'cost'
        }
      ],
      data2: [
        {
          key: '1',
          time: '2017-10-01 14:10',
          rate: '联系客户',
          status: '进行中',
          operator: '取货员 ID1234',
          cost: '5mins',
          cellClassName: {
            status: 'demo-table-info-cell-processing',
          }
        },
        {
          key: '2',
          time: '2017-10-01 14:05',
          rate: '取货员出发',
          status: '成功',
          operator: '取货员 ID1234',
          cost: '1h',
          cellClassName: {
            status: 'demo-table-info-cell-success',
          }
        },
        {
          key: '3',
          time: '2017-10-01 13:05',
          rate: '取货员接单',
          status: '成功',
          operator: '取货员 ID1234',
          cost: '5mins',
          cellClassName: {
            status: 'demo-table-info-cell-success',
          }
        },
        {
          key: '4',
          time: '2017-10-01 13:00',
          rate: '申请审批通过',
          status: '成功',
          operator: '系统',
          cost: '1h',
          cellClassName: {
            status: 'demo-table-info-cell-success',
          }
        },
        {
          key: '5',
          time: '2017-10-01 12:00',
          rate: '发起退货申请',
          status: '成功',
          operator: '用户',
          cost: '5mins',
          cellClassName: {
            status: 'demo-table-info-cell-success',
          }
        },
      ]
    }
  },
  computed: {
    refundInfo: () => [
      { info: '取货单号:1000000000' },
      { info: '状态 : 已取货' },
      { info: '销售单号 :1234123421' },
      { info: '子订单 :3214321432' },
    ],
    userinfo: () => [
      { info: '用户姓名：付小小' },
      { info: '联系电话：18100000000' },
      { info: '常用快：递菜鸟仓储' },
      { info: '取货地址：浙江省杭州市西湖区万塘路18号 ' },
      { info: '备注：无' },
    ],
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
.title {
  font-size: 18px;
  margin: 10px 0;
  font-weight: 700;
}
.info {
  padding: 20px;
}
.sub-title {
  font-size: 18px;
  margin: 15px 0;
  color: #000;
  font-weight: 700;
}
.text {
  font-size: 14;
  margin: 15px 0;
  font-weight: 400;
}
.block {
  display: block;
  font-weight: 500;
}

.ivu-table .demo-table-info-cell-success {
  background-color: #52c41a;
  color: #fff;
}

.ivu-table .demo-table-info-cell-processing {
  background-color: #1890ff;
  color: #fff;
}
</style>