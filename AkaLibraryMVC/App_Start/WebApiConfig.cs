using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Http.Controllers;
using System.Web.Http.Dependencies;

using DataAccessLayer;
using DataAccessLibrary;
using LibarayServices;
using Microsoft.Extensions.DependencyInjection;

namespace AkaLibraryMVC
{
    public class WebApiConfig
    {

        public static void Register(HttpConfiguration config)
        {

            config.MapHttpAttributeRoutes();

            //To combine attribute routing to convention  routing
            config.Routes.MapHttpRoute(
            name: "DefaultApi",
            routeTemplate: "api/{controller}/{id}",
            defaults: new { id = RouteParameter.Optional }
            );

            var services = new ServiceCollection();


            ConfigureServices(services);

            var resolver = new MyDependencyResolver(services.BuildServiceProvider());
            config.DependencyResolver = resolver;


        }

        public static void ConfigureServices(IServiceCollection services)
        {
            //====================================================
            // Create the DB context for the IDENTITY database
            //====================================================
            // Add a database context - this can be instantiated with no parameters
            services.AddTransient<IlibraraySevice, LibraryService>();
            services.AddTransient<ILibrarybookDalRepo, LibrarybookDalRepo>();

            services.AddControllersAsServices(typeof(WebApiConfig).Assembly.GetExportedTypes()
                .Where(t => !t.IsAbstract && !t.IsGenericTypeDefinition)
            .Where(t => typeof(IHttpController).IsAssignableFrom(t)
            || t.Name.EndsWith("Controller", StringComparison.OrdinalIgnoreCase)));

        }
        /// <summary>
        /// Provides the default dependency resolver for the application - based on IDependencyResolver, which hhas just two methods
        /// </summary>

    }
   public class MyDependencyResolver : IDependencyResolver
   {
       protected IServiceProvider _serviceProvider;

       public MyDependencyResolver(IServiceProvider serviceProvider)
       {
           this._serviceProvider = serviceProvider;
       }

       public IDependencyScope BeginScope()
       {
           return this;
       }

       public void Dispose()
       {

       }

       public object GetService(Type serviceType)
       {
           return this._serviceProvider.GetService(serviceType);
       }

       public IEnumerable<object> GetServices(Type serviceType)
       {
           return this._serviceProvider.GetServices(serviceType);
       }
   }

    public static class ServiceProviderExtensions
    {
        public static IServiceCollection AddControllersAsServices(this IServiceCollection services, IEnumerable<Type> serviceTypes)
        {
            foreach (var type in serviceTypes)
            {
                services.AddTransient(type);
            }

            return services;
        }
    }


}