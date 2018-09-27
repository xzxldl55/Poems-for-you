# 为你写诗API

1. 获取分类

   描述：获得诗词分类

   接口地址：http://poet.zykee.net/shlibrary/public/portal/poem/getTpye

   请求类型：GET

   返回数据：

   ```json
   [
       {type:"乐府诗集"},
       {type:"古诗十九首"}
   ]
   ```

2. 诗词阅读

   描述：获得指定分类下诗词

   接口地址：http://poet.zykee.net/shlibrary/public/portal/poem/readPoem  

   请求类型：POST

   请求数据：

   | 字段名 | 类型 | 描述          | 示例     |
   | ------ | ---- | ------------- | -------- |
   | type   | char | 诗词类型      | 乐府诗集 |
   | pnum   | int  | 页码，起始为0 | 1        |

   返回数据：

   ```json
   [
       {
           "id": 1038,
           "title": "秋风辞",
           "dynasty": "汉",
           "author": "刘彻",
           "content": "秋风起兮白云飞，\r\n草木黄落兮雁南归。\r\n兰有秀兮菊有芳，\r\n怀佳人兮不能忘。\r\n泛楼船兮济汾河，\r\n横中流兮扬素波。\r\n箫鼓鸣兮发棹歌，\r\n欢乐极兮哀情多。\r\n少壮几时兮奈老何！",
           "type": "乐府诗集"
       }
   ]
   ```

   *一次返回10首诗*

3. 诗词背诵

   描述：获得指定分类下待背诵诗词

   接口地址：http://poet.zykee.net/shlibrary/public/portal/poem/recitePoem

   请求类型：POST

   请求数据：

   | 字段名 | 类型 | 描述          | 示例     |
   | ------ | ---- | ------------- | -------- |
   | type   | char | 诗词类型      | 乐府诗集 |
   | pnum   | int  | 页码，起始为0 | 1        |

   返回数据：

   ```json
   {
       "id": 1038,
       "title": "秋风辞",
       "dynasty": "汉",
       "author": "刘彻",
       "content": "秋风起兮白云飞，\r\n草木黄落兮雁南归。\r\n兰有秀兮菊有芳，\r\n怀佳人兮不能忘。\r\n泛楼船兮济汾河，\r\n横中流兮扬素波。\r\n箫鼓鸣兮发棹歌，\r\n欢乐极兮哀情多。\r\n少壮几时兮奈老何！",
       "type": "乐府诗集",
       "jsonContent": [
           "秋风起兮白云飞",
           "草木黄落兮雁南归",
           "兰有秀兮菊有芳",
           "怀佳人兮不能忘",
           "泛楼船兮济汾河",
           "横中流兮扬素波",
           "箫鼓鸣兮发棹歌",
           "欢乐极兮哀情多",
           "少壮几时兮奈老何",
           ""
       ]
   }
   ```

4. 背诵诗词选项

   描述：给出诗词下句句，获取干扰选项

   接口地址：http://poet.zykee.net/shlibrary/public/portal/poem/getOption

   请求类型：POST

   请求数据：

   | 字段名    | 类型 | 描述 | 示例       |
   | --------- | ---- | ---- | ---------- |
   | next_line | char | 下句 | 疑是地上霜 |

   ```json
   {
       "status": "success",
       "words": "疑似地上霜",
       "lists": [
           "清渟得早霜",
           "愁杀未成霜",
           "明浮玉砌霜",
           "齐枣夜含霜",
           "鲜逾橘得霜",
           "楚剑利如霜"
       ]
   }
   ```

   

5. 随机阅读

   描述：85首诗词库随机阅读

   接口地址：http://poet.zykee.net/shlibrary/public/portal/poem/randReadPoem

   请求类型：GET

   返回数据：

   ```json
   [
       {
           "id": 1011,
           "title": "送宋飞卿二首 其二",
           "dynasty": "金",
           "author": "赵秉文",
           "content": "未能免俗聊从宦，遥望孤云忆旧庐。不乐径归真吏隐，得闲随分寄僧居。关山牢落三年梦，行李萧条一束书。想见莲花峰下遇，路人遥指倒骑驴。"
       }
   ]
   ```

6. 写诗接口

   描述：按照一定条件写诗

   接口地址：http://poet.zykee.net/shlibrary/public/portal/poem/writePoem

   请求类型：POST

   请求数据：

   | 字段名 | 类型 | 描述                                                         | 示例     |
   | ------ | ---- | ------------------------------------------------------------ | -------- |
   | type   | int  | 类型，1 自由诗，2 带押韵的自由诗， 4给定若干字，以最大概率生成诗 | 1        |
   | start  | char | 类型type为4时必填，关键词                                    | 老当益壮 |

   返回数据：

   ```json
   [
       
           "id": 1011,
           "content": [
           "清渟得早霜",
           "愁杀未成霜",
           "明浮玉砌霜",
           "齐枣夜含霜",
           "鲜逾橘得霜",
           "楚剑利如霜"
       ]
   ]
   ```

   