export function TypographyDemo() {
  return (
    <div>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">
        笑いへの課税:ジョーク税の年代記
      </h1>
      <p className="text-xl leading-7 text-muted-foreground [&:not(:first-child)]:mt-6">
        昔々、遠い国に、一日中王座に寝そべって過ごす、とても怠け者の王様がいました。ある
        日、家臣たちが困った問題を持って王様のもとを訪れました。王国の財政が底をつきかけ
        ていたのです。
      </p>
      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        王様の計画
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        王様はじっくりと考えた末、ついに{" "}
        <a
          href="#"
          className="font-medium text-primary underline underline-offset-4"
        >
          ある名案
        </a>
        を思いついた。国中のジョークに税を課すというのだ。
      </p>
      <blockquote className="mt-6 border-l-2 pl-6 italic">
        「そもそも」と王様は言った。「誰もが楽しいジョークを好むのだから、その特権に対し
        て代金を払うのは当然のことだ」
      </blockquote>
      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        ジョーク税
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        王様の家臣たちはこれを面白がらなかった。ぶつぶつと不満を漏らしたが、王様の意志は
        固かった:
      </p>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>第一段階の言葉遊び:金貨5枚</li>
        <li>第二段階のジョーク:金貨10枚</li>
        <li>第三段階の一言ギャグ:金貨20枚</li>
      </ul>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        その結果、誰もジョークを言わなくなり、王国は陰気な雰囲気に包まれた。しかし、王様
        の愚かな考えに屈しない者が一人だけいた。ジョーカーという名の道化師である。
      </p>
      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        ジョーカーの反乱
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        ジョーカーは夜な夜な城に忍び込み、あちこちにジョークを仕掛けるようになった。王様
        の枕の下、スープの中、さらには王室のトイレの中にまで。王様は激怒したが、ジョーカ
        ーを止めることはできなかった。
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        そしてある日、王国の人々はジョーカーが残したジョークがあまりにも面白く、笑いを抑
        えられないことに気づいた。そして一度笑い始めると、誰も止まらなかった。
      </p>
      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        民衆の反乱
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        笑いによって元気づけられた王国の人々は、再びジョークや言葉遊びを口にするようにな
        り、やがて王国中がこの笑いの渦に加わった。
      </p>
      <div className="my-6 w-full overflow-y-auto">
        <table className="w-full">
          <thead>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                王室の財庫
              </th>
              <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                民衆の幸福度
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                空っぽ
              </td>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                あふれるほど
              </td>
            </tr>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                そこそこ
              </td>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                満足
              </td>
            </tr>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                いっぱい
              </td>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                大喜び
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        王様は、家臣たちがどれほど幸せになったかを見て、自らの過ちに気づき、ジョーク税を
        廃止した。ジョーカーは英雄と称えられ、王国はその後幸せに暮らした。
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        この物語の教訓は、良い笑いの力を決して過小評価してはならない、そして悪い考えには
        常に気をつけるべきだということだ。
      </p>
    </div>
  )
}
