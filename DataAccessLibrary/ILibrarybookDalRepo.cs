using DataAccessLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer
{
    public interface ILibrarybookDalRepo
    {
        IEnumerable<Library_Book> GetLibraryBook(int LibraryId);
        void SignoutBook(int librarayBookID, int LibraryId);
    }
}
