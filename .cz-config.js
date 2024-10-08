module.exports = {
  types: [
    { value: 'feat', name: '特性: 一个新的特性' },
    { value: 'fix', name: '修复: 修复一个Bug' },
    { value: 'docs', name: '文档: 变更的只有文档' },
    { value: 'style', name: '格式: 空格, 分号等格式修复' },
    { value: 'refactor', name: '重构: 代码重构，注意和特性、修复区分开' },
    { value: 'perf', name: '性能: 提升性能' },
    { value: 'test', name: '测试: 添加一个测试' },
    { value: 'revert', name: '回滚: 代码回退' },
    { value: 'chore', name: '工具:开发工具变动(构建、脚手架工具等)' },
    { value: 'merge', name: '合并:合并代码' },
    { value: 'build', name: '打包: 打包发布' },
    { value: 'ci', name: '集成: 持续集成' },
    { value: 'release', name: '发布: 发布新版本' },
    { value: 'other', name: '其他: 其他改动，比如构建流程, 依赖管理' },
  ],
  scopes: [
    // 修改范围
    // { value: 'page', name: '页面' },
    // { value: 'component', name: '组件' },
    // { value: 'style', name: '样式' },
    // { value: 'method', name: '方法' },
    // { value: 'data', name: '数据' },
    // { value: 'logic', name: '逻辑' },
    // { value: 'config', name: '配置' },
    // { value: 'dependent', name: '依赖' },
    // { value: 'other', name: '其他' },
  ],
  scopeOverrides: {
    // feat: {} 范围覆盖
  },
  messages: {
    type: '选择提交类型:',
    scope: '修改范围(可选):',
    subject: '短说明:',
    body: '长说明，使用"|"换行(可选)：',
    footer: '关联关闭的issue，例如：#31, #34(可选):',
    confirmCommit: '确定提交说明?',
  },
  allowBreakingChanges: ['特性', '修复'],
  subjectLimit: 100,
}
