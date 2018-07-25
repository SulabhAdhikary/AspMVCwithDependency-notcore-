using DataAccessLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibarayServices
{
    public interface IlibraraySevice
    {
       IEnumerable<Library_Book> GetLibraryBook(int LibraryId);
        void SignoutBook(int librarayBookID, int LibraryId);
    }
}
