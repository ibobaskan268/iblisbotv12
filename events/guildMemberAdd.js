module.exports = member => {
    let username = member.user.username;
    member.send('\<a:w_:737981959887913021> \<a:e_:737981980234481764> \<a:l_:737981999935127582> \<a:c_:737982016661880852> \<a:o_:737982259490979854> \<a:m_:737982091458773022> \<a:e_:737981980234481764> Hoş geldin **' + username + '**!');
    member.guild.defaultChannel.send('hg '+username+'');
};

