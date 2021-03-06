namespace DataAccessLayer
{
    using System;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("BookSignedOut")]
    public partial class BookSignedOut
    {
        [Key]
        [Column(Order = 0)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int LibraryBookSId { get; set; }

        [Key]
        [Column(Order = 1)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int MemberId { get; set; }

        [Key]
        [Column(Order = 2)]
        public DateTime WhenSignedOut { get; set; }

        public DateTime? WhenReturned { get; set; }

        public virtual Member Member { get; set; }
    }
}