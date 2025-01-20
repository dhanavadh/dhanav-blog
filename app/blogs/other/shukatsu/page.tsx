import { link } from 'fs'
import Link from 'next/link'
import React from 'react'

const Reference = [
    {
        id: 1,
        name: '小野浩（2016）「日本の労働時間はなぜ減らないのか？ : 長時間労働の社会学的考察」『日本労働研究雑誌』677, pp.15-27 ',
        link: 'https://www.jil.go.jp/institute/zassi/backnumber/2016/12/pdf/015-027.pdf'
    },
    {
        id: 2,
        name: 'キャリアパーク「【就活の現状と社会の問題点とは】学生に大きく影響を与える日本が改善すべきシステム」（2020/06/23）',
        link: 'https://careerpark.jp/2611'
    },
    {
        id: 3,
        name: '厚生労働省「第５回 今後の若年者雇用に関する研究会　事務局説明資料」（2020/05/29）',
        link: 'https://www.mhlw.go.jp/content/11801000/000634510.pdf'
    },
    {
        id: 4,
        name: '文部科学省「『インターンシップの推進に当たっての基本的考え方』の見直しの背景及び趣旨について」（2014/4/8）',
        link: 'https://www.mext.go.jp/a_menu/koutou/sangaku2/1346606.htm'
    },
    {
        id: 5,
        name: '日本貿易振興機構「アジア6カ国から緊急報告 －豊富な高度人材とコロナの影響－」（2020/06/15）',
        link: 'https://www.jetro.go.jp/ext_images/biz/seminar/2020/6725cd7c96d00a11/doc2.pdf'
    },
    {
        id: 6,
        name: 'Samra Zulfaqar, Nodoka Katsura and Rinka Tonsho「Workers in Japan can’t quit their jobs. They hire resignation experts to help」（2024/08/31）',
        link: 'https://edition.cnn.com/2024/08/31/business/japan-workers-resignation-agencies-intl-hnk/index.html'
    },

]

const BlogBuddhism = () => {
  return (
    <div className='mx-6 md:mx-32 font-[family-name:var(--font-noto-sans)]'>
        {/* Banner */}
        <div className='flex max-h-3/4 max-w-full relative -z-[1]'>
          <img src='/banner/blog-2.svg' className='h-full w-full absolute object-cover -z-[1] brightness-75 rounded-b-xl'></img>                        
          <div className='mx-6 mt-48 md:mt-64 w-full'>            
            <p className='ref-image'>Image from @dhanavadh</p>            
          </div>
        </div>   

        {/* Heading */}
        <div className='mt-6 mb-10 border-l-4 border-blue-500 pl-4'>
            <p className='p'>20 minutes Reading</p>
          <p className='title'>日本における就職活動</p>
          <p className='sub-title-article mt-2'>現在、日本の就職活動、いわゆる「就活」についていえば、多くの学生がインターンシップに参加することがよく見られ、卒業後すぐに働く学生もよく見られる。だが、タイの状況を見ると、学生の就活に対する関心は日本ほど高くないように思われる。</p>          
        </div>                                     
        {/* Paragraph */}
        <div className='paragraph'>
          <p>　現在、日本の就職活動、いわゆる「就活」についていえば、多くの学生がインターンシップに参加することがよく見られ、卒業後すぐに働く学生もよく見られる。だが、タイの状況を見ると、学生の就活に対する関心は日本ほど高くないように思われる。そして、日本とタイの大学生のインターンシップ参加率を比べると、日本のほうが一般的に高いと思われている。これらの違いをよく見ると、タイと日本は社会的文化や政府からの支援が異なっており、両国の就活に違いを与えていると言える。</p>
        </div>   
        <div className='paragraph'>
          <p>　タイでは、日本貿易振興機構（2020）によると、だいたい、学生は在学中に就活を行うことはあるが、卒業後が就活の始まりだと考えている人がよく見られる。一方、キャリアパーク（2020）では、日本では、多くの大学生が大学生活の一環として就活に集中していると述べている。また、厚生労働省（2020）によれば、日本は新卒一括採用という慣行がある。この慣行はどこの学部から卒業したかに関わらず、在学中に募集を行い、卒業後に直結したスキルのない新卒者であっても、就職することができるという雇用慣行である。タイの教育制度に対する価値観タイでは理系・文系に対する価値観が強いため、日本のように、学部や専攻に関係なく、幅広い分野の卒業生が対象となる新卒一括採用はタイでほとんど見かけられない。それで、大学生活の一部となる就活の価値観と日本の独特の雇用慣行をよく考察すると、両国の違いの要因の一つを指摘することができると言える。</p>
        </div>   
        <div className='paragraph'>
          <p>　また、政府の観点に注目してみれば、日本の政府は大学生にインターンシップの支援を与えている一方、タイの政府は大学生のためのインターンシップ推進や職業を意識させる計画などがない。文部科学省（2014）によれば、日本での文部科学省、通商産業省、労働省いわゆる３省合意は、インターンシップの推進の合意を立て、学生に主体的な職業選択や高い職業意識の育成の考えを支援した。この推進は、両国における国の将来を担う若者に対する価値観が違っており、就職活動の違いを与える原因の一つだと言えないだろうか。</p>
        </div>  
        <div className='paragraph'>
          <p>　さらに、両国の転職に対する観点は、社会的文化の違いとして、就活の違いの原因を作り出す傾向があると考えられる。小野浩（2016）によって、日本では、長期雇用の文化が根付いており、企業に対する忠誠心が非常に重視されるという。また、Samra et al. （2024）は、転職が多いことは、ネガティブなイメージを招く傾向があると見られる。日本では転職が多いことに対してマイナスイメージを持つ人が多いのに対し、タイでは転職が比較的一般的で、ポジティブなイメージを持つ人が多いと思われる。そのため、日本の大学生は安定した仕事を長期間続けることを重視し、在学中から積極的に就活を始めると思わせる。一方で、タイの大学生はそのようなイメージを持っていないため、卒業後に就活を始める人が多いように見られる。このような転職に対する価値観の違いが根付いていることことは、両国の就活の取り組みを異なるものにし、就職活動の違いを生み出す要因の一つであると言えるだろう。</p>
        </div>   
        <div className='paragraph'>
          <p>　つまり、日本とタイの就活には大きな違いがある。日本では大学生活の一環として多くの学生がインターンや就活に参加し、新卒一括採用の制度により学部を問わず採用されるが、タイでは大学生のうちの就活意識が低く、卒業後に始めるケースが多い。また、日本政府がインターンシップ推進を支援する一方、タイではその支援が少ないため、就活の取り組みに違いが見られる。さらに、転職に対する価値観も異なり、日本は終身雇用が重視され、転職がネガティブ視される傾向にあるが、タイではポジティブに捉えられている。</p>
        </div>           
        {/* Reference */}
        <div className='h3 border-l-4 border-blue-500 pl-4'>
          <p className='h3'>Reference</p>
          {Reference.map((item) => (
            <ul className='p my-2 list-disc ml-4' key={item.id}>
            <li>
                <p>{item.name}</p>
                <Link href={item.link} className='link' target='_blank'>Get this reference →</Link>
            </li>
            </ul>      
          ))}    
        </div>  
        {/* Navigator */}          
    </div>
  )
}

export default BlogBuddhism