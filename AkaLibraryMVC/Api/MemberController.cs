using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DataAccessLayer;
using System.Threading.Tasks;
using System.Data.Entity;
using LibarayServices;

namespace AkaLibraryMVC.Api
{
    [Route("api/Member")]
    public class MemberController: ApiController
    {

        private LibraryModel db = new LibraryModel();

        public async Task<IEnumerable<dynamic>> Get()
        {
            var res = await db.Members.ToListAsync();
            var q = from lib in res select new { id = lib.MemberId, name = lib.FullName };
            return q.ToList<dynamic>();
        }


    }
}