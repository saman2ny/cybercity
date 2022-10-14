import {
  ComponentFactoryResolver,
  Injectable,
  TemplateRef,
  Type,
  ViewContainerRef,
  EmbeddedViewRef,
  ComponentRef
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  private afterClosed$ = new Subject<any>();
  private leftSidenav: MatSidenav;
  private viewContainerRef: ViewContainerRef;

  leftSidenavComponentRef: EmbeddedViewRef<any> | ComponentRef<any>;

  public leftExpanded: boolean;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  setLeftSidenav(sidenav: MatSidenav): void {
    this.leftSidenav = sidenav;
  }

  setViewContainerRef(viewContainerRef: ViewContainerRef): void {
    this.viewContainerRef = viewContainerRef;
  }

  openInLeftSidenav(templateOrComponent: TemplateRef<any> | Type<any>, data?: { [key: string]: any }): Subject<any> {
    this.createView(templateOrComponent, data);
    this.leftExpanded = true;
    return this.afterClosed$;
  }

  closeLeftSidenav(result?: any): void {
    this.afterClosed$.next(result);
    this.leftExpanded = false;
  }

  resetAfterClosed(): void {
    // Notify subscribers that sidenav is closed
    this.leftExpanded = false;
    if (this.leftSidenavComponentRef) {
      this.leftSidenavComponentRef.destroy();
      this.leftSidenavComponentRef = null;
    }
    this.afterClosed$.complete();
    this.afterClosed$ = new Subject<any>();
  }

  private createView(templateOrComponentRef: TemplateRef<any> | Type<any>, data?: { [key: string]: any }): void {
    this.viewContainerRef.clear();

    if (templateOrComponentRef instanceof TemplateRef) {
      this.leftSidenavComponentRef = this.viewContainerRef.createEmbeddedView(templateOrComponentRef, {$implicit: data});
    } else {
      this.leftSidenavComponentRef = this.viewContainerRef.createComponent(
        this.componentFactoryResolver.resolveComponentFactory(templateOrComponentRef)
        );
      if (data) {
        Object.keys(data)
              .forEach(key => {
                (this.leftSidenavComponentRef as any).instance[key] = data[key];
              });
      }
    }
  }
}
